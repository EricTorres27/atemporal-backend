import Joi from 'joi'
import { validateSchema } from '../utils/validator'

// Validate create account
const createAccountSchema = Joi.object({
  nombre: Joi.string().min(2).max(30).required(),
  celular: Joi.string().min(10).max(10).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  typeUser: Joi.string()
})
// Validate fields to login
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
})
// Validate an email
const emailSchema = Joi.object({
  email: Joi.string().email().required()
})

// Validate an email
const passwordSchema = Joi.object({
  password: Joi.string().min(8).required()
})
export const userMiddleware = {
  validateCreateAccount: async (req, res, next) => {
    const { body } = req
    const validation = await validateSchema(createAccountSchema, body)
    if (validation.err) {
      console.log(validation.err)
      res.status(400).json({ msg: validation.err })
      return
    }
    next()
  },
  validateLogin: async (req, res, next) => {
    const { body } = req
    const validation = await validateSchema(loginSchema, body)
    if (validation.err) {
      res.status(400).json({ msg: validation.err })
      return
    }
    next()
  },
  validateEmail: async (req, res, next) => {
    const { body } = req
    const validation = await validateSchema(emailSchema, body)
    if (validation.err) {
      res.status(400).json({ msg: validation.err })
      return
    }
    next()
  },
  validatePassword: async (req, res, next) => {
    const { body } = req
    const validation = await validateSchema(passwordSchema, body)
    if (validation.err) {
      res.status(400).json({ msg: validation.err })
      return
    }
    next()
  }
}
