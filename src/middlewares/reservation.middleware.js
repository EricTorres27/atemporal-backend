import Joi from 'joi'
import { validateSchema } from '../utils/validator'

const createReservationSchema = Joi.object({
  codigo_qr: Joi.string().min(3).max(255).required(),
  asistencia: Joi.boolean(),
  id_evento: Joi.number(),
  id_usuario: Joi.number(),
  id: Joi.number()
})

export const validateCreateReservatiom = async (req, res, next) => {
  const validationReservation = await validateSchema(createReservationSchema, req.body)
  console.log(req.body)
  console.log(validationReservation.err)
  if (validationReservation.err) {
    res.status(400).json({ msg: validationReservation.err })
    return
  }

  next()
}
