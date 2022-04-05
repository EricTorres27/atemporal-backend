import { User } from '../models/User'

export const userController = {
  getAll: async (req, res) => {
    try {
      const users = await User.getAll()
      res.status(200).json(users)
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error' })
    }
  },
  getOne: async (req, res) => {
    try {
      const user = await User.getOne(req.params.id)
      if (user[0]) {
        res.json(user[0])
      } else {
        res.status(400).json({ msg: 'no existe' })
      }
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  },
  postOneAdmin: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await User.postOne(req.body)
      res.status(201).json(resp[0])
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  },
  postOneUser: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await User.postOne(req.body)
      res.status(201).json(resp[0])
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  },
  updateOne: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await User.updateOne(req.params.id, req.body)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  },
  deleteOne: async (req, res) => {
    try {
      const resp = await User.deleteOne(req.params.id)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  }
}
