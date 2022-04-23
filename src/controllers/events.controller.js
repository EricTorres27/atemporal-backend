import { Event } from '../models/Event'

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
      const resp = await Event.postOne(req.body.event)
      res.json(resp[0])
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error' })
    }
  },
  updateOne: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await Event.updateOne(req.params.id, req.body)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error' })
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
  }
}
