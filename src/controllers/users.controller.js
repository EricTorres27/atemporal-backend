import { User } from '../models/User'
import { hashUtil } from '../utils/hash'

export const userController = {
  getAll: async (req, res) => {
    try {
      const users = await User.getAll()
      res.status(200).json(users)
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer los usuarios' })
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
      res.status(500).json({ msg: 'error getting user' })
    }
  },
  postOneAdmin: async (req, res) => {
    try {
      const { id, ...newAdmin } = req.body
      const resp = await User.postOne(newAdmin)
      res.status(201).json(resp[0])
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error post admin' })
    }
  },
  updateOne: async (req, res) => {
    try {
      console.log(req.body, '😉')
      const data = {
        nombre: req.body.nombre,
        email: req.body.email,
        celular: req.body.celular
      }
      console.log(data, 'DATA', req.params.id, 'ID')
      const resp = await User.updateOne(req.params.id, data)
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
      res.status(500).json({ msg: 'Error al borrar el usuario' })
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
      await User.updateUserByField(
        req.body.id,
        'password',
        passwordHashed
      )
      res.status(200).json({ msg: 'Password actualizada' })
    } catch (error) {
      res.status(500).json({ msg: 'Lo sentimos intentalo más tarde' })
    }
  },
  updatePassword: async (req, res) => {
    try {
      console.log(req.body, req.params)
      const passwordHashed = await hashUtil.createHash(req.body.password)
      await User.updateUserByField(
        req.params.id,
        'password',
        passwordHashed
      )
      res.status(200).json({ msg: 'Password actualizada' })
    } catch (error) {
      res.status(500).json({ msg: 'Lo sentimos intentalo más tarde' })
    }
  }
}
