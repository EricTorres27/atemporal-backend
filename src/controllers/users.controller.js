import { User } from '../models/User'
import { hashUtil } from '../utils/hash'

export const userController = {
  getAll: async (req, res) => {
    try {
      const users = await User.getAll()
      res.status(200).json(users)
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error getting all users' })
    }
  },
  getOne: async (req, res) => {
    try {
      const user = await User.getOnebyId(req.params.id)
      if (user[0]) {
        res.json(user[0])
      } else {
        res.status(400).json({ msg: 'user does not exist' })
      }
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error getting user' })
    }
  },
  postOneAdmin: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await User.postOne(req.body)
      res.status(201).json(resp[0])
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error post admin' })
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
      res.json({ msg: 'Error al eliminar el usuario' })
    }
  },
  whoIam: async (req, res) => {
    try {
      console.log(req.body.id)
      const [user] = await User.getOnebyId(req.body.id)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ msg: 'Error al consultar el usuario' })
    }
  },
  recoverPassword: async (req, res) => {
    try {
      const passwordHashed = await hashUtil.createHash(req.body.password)
      const updated = await User.updateUserByField(
        req.body.id,
        'password',
        passwordHashed
      )
      console.log(updated, '🤞')
      res.status(200).json({ msg: 'Password actualizada' })
    } catch (error) {
      res.status(500).json({ msg: 'Lo sentimos intentalo más tarde' })
    }
  }
}
