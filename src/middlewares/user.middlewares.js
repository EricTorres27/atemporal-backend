import Joi from 'joi'
import { validateSchema } from '../utils/validator'

// Create account
const createAccountSchema = Joi.object({
  nombre: Joi.string().min(2).max(30).required(),
  celular: Joi.string().min(10).max(10).required(),
  correo_electronico: Joi.string().email().required(),
  pass: Joi.string().min(8).required(),
  es_admin: Joi.boolean()
})

export const validateCreateAccount = async (req, res, next) => {
  const { body } = req
  const validation = await validateSchema(createAccountSchema, body)
  if (validation.err) {
    res.status(400).json({ msg: validation.err })
    return
  }
  next()
}

// Login user
const loginSchema = Joi.object({
  correo_electronico: Joi.string().email().required(),
  pass: Joi.string().min(8).required()
})
export const validateLogin = async (req, res, next) => {
  const { body } = req
  const validation = await validateSchema(loginSchema, body)
  if (validation.err) {
    res.status(400).json({ msg: validation.err })
    return
  }
  next()
}
