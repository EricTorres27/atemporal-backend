import Joi from 'joi'
import { validateSchema } from '../utils/validator'

// Create event & ticket
const createEventSchema = Joi.object({
  nombre_organizador: Joi.string().min(5).max(50).required(),
  celular_organizador_principal: Joi.string().min(10).max(10).required(),
  celular_organizador_secundario: Joi.string().min(10).max(10).required(),
  nombre_evento: Joi.string().min(5).max(50).required(),
  fecha_evento: Joi.date().required(),
  hora_inicio: Joi.string().min(2).max(20).required(),
  hora_final: Joi.string().min(2).max(20).required(),
  ubicacion: Joi.string().min(8).max(50).required(),
  descripcion: Joi.string().min(10).max(500).required(),
  direccion: Joi.string().min(10).max(500).required(),
  url_video: Joi.string().min(10).max(500).required(),
  tipo_cobro: Joi.boolean().required(),
  foto_evento: Joi.string().min(10).max(100).required(),
  archivo_itinerario: Joi.string().min(10).max(500).required(),
  esta_activo: Joi.boolean()
})

const createTicketSchema = Joi.object({
  nombre: Joi.string().min(5).max(50).required(),
  cantidad: Joi.number().integer(),
  esta_activo: Joi.boolean()
})

export const validateCreateEvent = async (req, res, next) => {
  const { event } = req.body

  const { ticket } = req.body

  const validationEvent = await validateSchema(createEventSchema, event)
  const validationTicket = await validateSchema(createTicketSchema, ticket)

  if (validationEvent.err) {
    res.status(400).json({ msg: validationEvent.err })
    return
  } else if (validationTicket.err) {
    res.status(400).json({ msg: validationTicket.err })
    return
  }

  next()
}
