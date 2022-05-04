import { Event } from '../models/Event'
import { Ticket } from '../models/Ticket'

export const eventController = {
  getAll: async (req, res) => {
    try {
      const events = await Event.getAll()
      res.status(200).json(events)
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error getting all events' })
    }
  },
  getOne: async (req, res) => {
    try {
      const event = await Event.getOne(req.params.id)
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
      const respT = await Ticket.postOne(req.body.ticket)
      return res.status(201).json(respE[0])
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: 'error' })
    }
  },
  registerAttendee: async (req, res) => {
    try {
      console.log(req.body)
      const respE = await Event.registerAttendee(req.params.id,req.body)
      return res.status(201).json(respE[0])
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: 'error' })
    }
  },
  updateOne: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await Event.updateOne(req.params.id, req.body)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: 'error' })
    }
  },
  deleteOne: async (req, res) => {
    try {
      const resp = await Event.deleteOne(req.params.id)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error' })
    }
  },
  registerEvent: async (req, res) => {
    try {
      console.log(req.body)
      const event = req.body.event
      const [idEventCreated] = await Event.postOne(event)
      console.log(idEventCreated)

      console.log(req.body.event)
      const ticket = req.body.ticket
      const [idTicketCreated] = await Ticket.postOne(ticket)
      console.log(idTicketCreated)

      const [idRelation] = await Ticket.postOneRelation(idEventCreated, idTicketCreated)

      res.status(201).json({ msg: 'Event created successfully with id: ' + idEventCreated + ' , ticket id: ' + idTicketCreated + ' and relation id: ' + idRelation })
    } catch (error) {
      console.error(error)
      res.status(500).json({ msg: 'error registering event or ticket' })
    }
  }
}
