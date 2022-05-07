/* eslint-disable camelcase */
import { Event } from '../models/Event'
import { Ticket } from '../models/Ticket'
import { Category } from '../models/Category'

export const eventController = {
  getAll: async (req, res) => {
    try {
      const { esta_activo } = req.query
      const events = await Event.getAll({ esta_activo: parseInt(esta_activo) })
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
      const resp = await Event.updateOne(req.params.idEvento, { esta_activo: 1 })
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
      const { idUsuario } = req.body
      const { categorias } = req.body

      const [idEventCreated] = await Event.postOne(event)
      await Event.registerEventCreation(idUsuario.id_usuario,idEventCreated)

      for (let i = 0; i < categorias.length; i++){
        await Category.postEventCategory(categorias[i].id,idEventCreated)
      }

      if(event.tipo_cobro === false){

        res.status(201).json({ msg: 'Event created successfully with id: ' + idEventCreated })
        
      }else{

      const { ticket } = req.body

      for (let i = 0; i < ticket.length; i++){

        const [idTicketCreated] = await Ticket.postOne(ticket[i])
        await Ticket.postOneRelation(idEventCreated, idTicketCreated)

      }

      res.status(201).json({ msg: 'Event created successfully with id: ' + idEventCreated + ' and also its tickets' })

      }

    } catch (error) {
      console.error(error)
      res.status(500).json({ msg: 'error registering event' })
    }
  }
}
