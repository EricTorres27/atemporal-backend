import Joi from 'joi'
import { validateSchema } from '../utils/validator'

// Create event & ticket
const createEventSchema = Joi.object({
  nombre_organizador: Joi.string().max(50),
  celular_principal: Joi.string().min(10).max(10),
  celular_secundario: Joi.string().min(10).max(10),
  nombre_evento: Joi.string().max(100),
  fecha_evento: Joi.date(),
  hora_inicio: Joi.string().min(5).max(5),
  hora_final: Joi.string().min(5).max(5),
  lugar: Joi.string().max(200),
  ciudad: Joi.string().max(200),
  descripcion: Joi.string().max(1200),
  ubicacion_maps: Joi.string().max(500),
  direccion: Joi.string().min(10).max(500),
  url_video: Joi.string().min(10).max(500),
  tipo_cobro: Joi.boolean(),
  foto_evento: Joi.string().max(255),
  itinerario_evento: Joi.string().min(10).max(500)
})

const createTicketSchema = Joi.object({
  nombre: Joi.string().min(5).max(50),
  cantidad: Joi.number().integer(),
  precio: Joi.number().integer()
})

export const validateCreateEvent = async (req, res, next) => {
  console.log(req.body, 'EVENT')
  const { event } = req.body
  const validationEvent = await validateSchema(createEventSchema, event)

  if (event.tipo_cobro === false) {
    if (validationEvent.err) {
      res.status(400).json({ msg: validationEvent.err })
      return
    }
    next()
  } else {
    const { ticket } = req.body

    for (let i = 0; i < ticket.length; i++) {
      console.log(ticket[i])
      const validationTicket = await validateSchema(createTicketSchema, ticket[i])

      if (validationTicket.err) {
        res.status(400).json({ msg: validationTicket.err })
        return
      }
    }

    if (validationEvent.err) {
      res.status(400).json({ msg: validationEvent.err })
      return
    }

    next()
  }
}
