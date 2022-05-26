import { User } from '../models/User'
import { authUtil } from '../utils/auth'

export const authMiddleware = {
  verifyTokenActive: (req, res, next) => {
    try {
      const { headers, body } = req
      const { authorization = undefined } = headers

      if (!authorization) {
        res.status(500).json({ msg: 'Necesitas estar logeado' })
        return
      }

      const token = authorization.split(' ')[1]

      const decodedToken = authUtil.verifyToken(token)

      if (!decodedToken) {
        res.status(500).json({ msg: 'Credenciales invalidas' })
        return
      }
      const { id } = decodedToken

      // We add the id in body for the other middleware functions
      body.id = id

      // Next middleware
      next()
    } catch (error) {
      console.log(error, '🙌')
      res.status(500).json({ msg: 'Vuelve a iniciar sesión' })
    }
  },
  verifyTokenRecoverPassword: async (req, res, next) => {
    try {
      const { headers, body } = req
      const { authorization = undefined } = headers

      if (!authorization) {
        res.status(500).json({ msg: 'Solicita de nuevo la recuperación' })
        return
      }

      const token = authorization.split(' ')[1]

      const decodedToken = authUtil.verifyToken(token, 'recover-password')

      if (!decodedToken) {
        res.status(500).json({ msg: 'Ups, enlace inválido' })
        return
      }

      const { id } = decodedToken

      const [user] = await User.getOnebyId(id)

      if (user.token_recover !== token) {
        res.status(500).json({ msg: 'Enlace inválido' })
        return
      }

      await User.updateUserByField(id, 'token_recover', null)

      body.id = id

      // Next middleware
      next()
    } catch (error) {
      console.log(error, '🐱‍🐉 ERROR MIDDLEWARE')
      res.status(500).json({ msg: 'Tiempo limite excedido' })
    }
  },
  isAdmin: async (req, res, next) => {
    try {
      const user = await User.getOneById(req.body.id)
      if (user[0]?.typeUser === 'admin') {
        next()
      } else {
        res.status(400).json({ msg: 'no tienes permisos' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'error al consultar permisos' })
    }
  }
}
