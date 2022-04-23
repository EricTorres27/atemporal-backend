import Joi from 'joi'
import { validateSchema } from '../utils/validator'

// Create event
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
  esta_activo: Joi.boolean().required()
})

export const validateCreateEvent = async (req, res, next) => {
  const { body } = req.body.event
  const validation = await validateSchema(createEventSchema, body)
  if (validation.err) {
    res.status(400).json({ msg: validation.err })
    return
  }
  next()
}
