import { Ticket } from '../models/Ticket'

export const ticketController = {
  getAll: async (req, res) => {
    try {
      const tickets = await Ticket.getAll()
      res.status(200).json(tickets)
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error getting all tickets' })
    }
  },
  getOne: async (req, res) => {
    try {
      const ticket = await Ticket.getOne(req.params.id)
      if (ticket[0]) {
        res.status(200).json(ticket[0])
      } else {
        res.status(400).json({ msg: 'ticket does not exist' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error getting ticket info.' })
    }
  },
  postOne: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await Ticket.postOne(req.body)
      return res.json(resp[0])
    } catch (error) {
      console.log(error)
      return res.json({ msg: 'error' })
    }
  },
  updateOne: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await Ticket.updateOne(req.params.id, req.body)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  },
  deleteOne: async (req, res) => {
    try {
      const resp = await Ticket.deleteOne(req.params.id)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  }
}
