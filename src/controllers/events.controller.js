/* eslint-disable camelcase */
import { Event } from '../models/Event'
import { Ticket } from '../models/Ticket'
import { Category } from '../models/Category'
import { cloudinaryUpload } from '../utils/cloudinary.js'

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
      res.status(500).json({ msg: 'error getting all events' })
    }
  },
  getOne: async (req, res) => {
    try {
      const event = await Event.getOne(req.params.idEvento)
      if (event[0]) {
        res.json(event[0])
      } else {
        res.status(400).json({ msg: 'event does not exist' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error getting event' })
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
      console.log(req.body)
      const respE = await Event.registerAttendee(req.body)
      return res.status(201).json(respE[0])
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: 'error' })
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
      const resp = await Event.updateOne(req.params.idEvento, { esta_aprobado: 1 })
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: 'error' })
    }
  },
  rejectEvent: async (req, res) => {
    try {
      const resp = await Event.updateOne(req.params.idEvento, { esta_aprobado: 0 })
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
      const { event } = req.body
      const { id } = req.body
      const { categorias } = req.body

      console.log(event, 'ANTES CL')
      event.foto_evento = await cloudinaryUpload(event.foto_evento)

      const [idEventCreated] = await Event.postOne(event)
      await Event.registerEventCreation(id, idEventCreated)

      for (let i = 0; i < categorias.length; i++) {
        await Category.postEventCategory(categorias[i].id, idEventCreated)
      }

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
