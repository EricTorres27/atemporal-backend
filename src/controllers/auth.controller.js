import { User } from '../models/User'
import { authUtil } from '../utils/auth'
import { hashUtil } from '../utils/hash'
import globalConfig from '../config'
import nodemailer from 'nodemailer'

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
      const token = authUtil.createTokenLogin({ id: idUserCreated })
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
      const token = authUtil.createTokenLogin({ id: user.id_usuario })
      console.log(token)
      res.status(200).json({ token })
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al ingresar, intentalo más tarde' })
    }
  },
  recoverPassword: async (req, res) => {
    try {
      const { email } = req.body
      const user = await userAlreadyExist(email)
      if (!user) {
        res.status(400).json({ msg: 'No existe una cuenta asociada a este correo' })
        return
      }
      // 1 creamos token
      const token = authUtil.createTokenRecoverPassword({ id: user.id_usuario }, 5)
      // actualizar la db
      const response = await User.updateUserByField(user.id_usuario, 'token_recover', token)
      console.log(response, '😂')

      // enviar email recover con el token

      // Create a SMTP transporter object
      const transporter = nodemailer.createTransport(globalConfig.SMTP_CREDENTIALS)
      // Message object
      const message = {
        from: 'noreplay@atemporal.art',
        to: `${email}`,
        subject: 'Reestablece tu contraseña ✔',
        text: 'Atemporal, la mejor plataforma de eventos',
        html: `
        <p>Da clic en el enlace para reestablecer tu constraseña, este enlace caduca en 5 minutos</p>
        <a href="${globalConfig.URL_FRONTEND}/cambiar-password/${token}">Clic aqui para reestablecer tu contraseña</a>
        `
      }

      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log('Error occurred. ' + err.message)
          return process.exit(1)
        }

        console.log('Message sent: %s', info.messageId)
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        res.status(200).json({ msg: 'Correo enviado' })
      })
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
