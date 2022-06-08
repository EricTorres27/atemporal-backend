/* eslint-disable camelcase */
import { Event } from '../models/Event'
import { Ticket } from '../models/Ticket'
import { Category } from '../models/Category'
import { State } from '../models/State'
import { cloudinaryUpload } from '../utils/cloudinary.js'
import randomString from '@smakss/random-string'
import globalConfig from '../config'
import nodemailer from 'nodemailer'
import qr from 'qrcode'
import { User } from '../models/User'
import { Reservation } from '../models/Reservation'

export const eventController = {
  getAllPublic: async (req, res) => {
    try {
      const events = await Event.getAll({
        esta_activo: 1,
        esta_aprobado: 1
      })
      res.status(200).json(events)
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error getting all events' })
    }
  },
  getAll: async (req, res) => {
    try {
      const { esta_activo, esta_aprobado } = req.query
      const events = await Event.getAll({
        esta_activo: parseInt(esta_activo),
        esta_aprobado: parseInt(esta_aprobado)
      })
      res.status(200).json(events)
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al consultar eventos' })
    }
  },
  getOne: async (req, res) => {
    try {
      const event = await Event.getOne(req.params.idEvento)
      if (event[0]) {
        const tickets = await Event.getTickets(req.params.idEvento)
        const boletos = []
        for (const ticket of tickets) {
          const data = await Event.getInfoTicket(ticket.id_boleto)
          boletos.push(data[0])
        }
        const categories = await Category.getCategoriesByEventId(req.params.idEvento)
        const setCategories = []
        for (const category of categories) {
          const data = await Category.getCategoryNameById(category.id_categoria)
          setCategories.push(data[0])
        }

        const dataResponse = {
          ...event[0],
          boletos: boletos,
          categorias: setCategories
        }
        res.json(dataResponse)
      } else {
        res.status(400).json({ msg: 'El evento no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al consultar evento' })
    }
  },
  getOnePublic: async (req, res) => {
    try {
      const event = await Event.getOnePublic(req.params.idEvento)
      if (event[0]) {
        res.json(event[0])
      } else {
        res.status(400).json({ msg: 'event does not exist' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al consultar evento' })
    }
  },
  postOne: async (req, res) => {
    try {
      console.log(req.body.event)
      const respE = await Event.postOne(req.body.event)
      console.log(req.body.ticket)
      await Ticket.postOne(req.body.ticket)
      return res.status(201).json(respE[0])
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: 'error' })
    }
  },
  registerAttendee: async (req, res) => {
    try {
      const hashQR = randomString(10)
      const QR_CODE = await qr.toDataURL(hashQR)
      const URL_QR_CODE = await cloudinaryUpload(QR_CODE)

      const reservation = {
        id_usuario: req.body.id,
        id_evento: req.body.id_evento,
        codigo_qr: URL_QR_CODE
      }

      await Reservation.registerReservation(reservation)
      const user = await User.getOneById(req.body.id)

      const { id_boleto, cantidad } = req.body
      if (id_boleto != null && cantidad != null) {
        const currentTicket = await Ticket.getOne(id_boleto)
        await Ticket.updateOne(req.body.id_boleto, {
          ...currentTicket[0],
          cantidad: (currentTicket[0].cantidad - cantidad)
        })
        const currentTicket3 = await Ticket.getOne(req.body.id_boleto)
        console.log(currentTicket3[0])
      }

      // Create a SMTP transporter object
      const transporter = nodemailer.createTransport(globalConfig.SMTP_CREDENTIALS)
      // Message object
      const message = {
        from: 'noreplay@atemporal.art',
        to: `${user[0].email}`,
        subject: 'Reservación de evento',
        text: 'Atemporal, la mejor plataforma de eventos',
        html: `
        <p>Tu reservación ha sido existosa</p>
        <p>Tu codigo QR para acceder al evento es:</p>
        <img width="250"  src=${URL_QR_CODE} alt="QR"  >
        `
      }

      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log('Error occurred. ' + err.message)
          return process.exit(1)
        }

        console.log('Message sent: %s', info.messageId)
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        res.status(200).json({ msg: 'Reservación exitosa' })
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al reservar, intentalo más tarde' })
    }
  },
  unregisterAttendee: async (req, res) => {
    try {
      console.log(req.body)
      const respE = await Event.unregisterAttendee(req.params.idUsuario)
      return res.status(201).json(respE[0])
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: 'error' })
    }
  },
  updateOne: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await Event.updateOne(req.params.idEvento, req.body)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: 'error' })
    }
  },
  aproveEvent: async (req, res) => {
    try {
      const resp = await Event.updateOne(req.params.idEvento, { esta_aprobado: 1, esta_activo: 1 })
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: 'error' })
    }
  },
  rejectEvent: async (req, res) => {
    try {
      const resp = await Event.updateOne(req.params.idEvento, { esta_aprobado: 0, esta_activo: 1 })
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: 'error' })
    }
  },
  deleteOne: async (req, res) => {
    try {
      const resp = await Event.deleteOne(req.params.idEvento)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error' })
    }
  },
  registerEvent: async (req, res) => {
    try {
      const idUsuario = req.body.id
      const { event } = req.body
      const { categorias } = req.body
      const { estado } = req.body

      event.foto_evento = await cloudinaryUpload(event.foto_evento)

      if (event.itinerario_evento) {
        event.itinerario_evento = await cloudinaryUpload(event.itinerario_evento)
      }

      const [idEventCreated] = await Event.postOne(event)
      await Event.registerEventCreation(idUsuario, idEventCreated)

      for (let i = 0; i < categorias.length; i++) {
        await Category.postEventCategory(categorias[i].id, idEventCreated)
      }

      await State.postEventState(estado.id, idEventCreated)

      if (event.tipo_cobro === false) {
        res.status(201).json({ msg: 'Event creado exitosamente con id: ' + idEventCreated })
      } else {
        const { ticket } = req.body

        for (let i = 0; i < ticket.length; i++) {
          const [idTicketCreated] = await Ticket.postOne(ticket[i])
          await Ticket.postOneRelation(idEventCreated, idTicketCreated)
        }

        res.status(201).json({ msg: 'Event creado exitosamente con el id: ' + idEventCreated + ' junto a sus tickets' })

        // esto deberia estar aqui
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al registrar evento' })
    }
  },
  getEventsByCategory: async (req, res) => {
    try {
      const events = await Event.getEventsByCategory(req.params.idCategoria)
      res.status(200).json(events)
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al conseguir eventos por categoria' })
    }
  },
  getEventsByTextSearch: async (req, res) => {
    try {
      const events = await Event.getEventsByTextSearch(req.params.texto)
      res.status(200).json(events)
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al conseguir evento por categoria' })
    }
  },
  getAllByCiudad: async (req, res) => {
    try {
      const event = await Event.getAllByCiudad(req.params.name)
      if (event[0]) {
        res.json(event[0])
      } else {
        res.status(400).json({ msg: 'Evento en la ciudad no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al conseguir evento por ciudad' })
    }
  },
  getAllByEstado: async (req, res) => {
    try {
      const event = await Event.getAllByEstado(req.params.name)
      if (event[0]) {
        res.json(event[0])
      } else {
        res.status(400).json({ msg: 'Evento en la estado no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al conseguir evento por estado' })
    }
  }
}
