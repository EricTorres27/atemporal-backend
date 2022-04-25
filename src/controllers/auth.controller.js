import { User } from '../models/User'
import { authUtil } from '../utils/auth'
import { hashUtil } from '../utils/hash'

export const authController = {
  registerAccount: async (req, res) => {
    try {
      // await Auth.deleteAll()
      console.log(req.body)
      const account = await userAlreadyExist(req.body.email)
      if (account) {
        res.status(400).json({ msg: 'Este correo ya esta asociado a otra cuenta' })
        return
      }
      const passwordHashed = await hashUtil.createHash(req.body.password)
      const user = {
        ...req.body,
        password: passwordHashed
      }
      const [idUserCreated] = await User.postOne(user)
      console.log(idUserCreated)
      const token = authUtil.createToken({ id: idUserCreated })
      res.status(201).json({ token: token })
    } catch (error) {
      console.error(error)
      res.status(500).json({ msg: 'Error al crear la cuenta, intenta más tarde' })
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await userAlreadyExist(email)
      if (!user) {
        res.status(400).json({ msg: 'No existe una cuenta asociada a este correo' })
        return
      }
      if (!hashUtil.compareHash(password, user.password)) {
        res.status(400).json({ msg: 'Credenciales incorrectas' })
        return
      }
      const token = authUtil.createToken({ id: user.id_usuario })
      res.status(200).json({ token })
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al ingresar, intentalo más tarde' })
    }
  }
}

const userAlreadyExist = async (email) => {
  const userExist = await User.findByEmail(email)
  return userExist[0] ? userExist[0] : null
}
