import Joi from 'joi'
import { validateSchema } from '../utils/validator'

// Create Category
const createPaymentMethSchema = Joi.object({
  nombre: Joi.string().min(5).max(50).required(),
  esta_activo: Joi.boolean()
})

export const validateCreatePaymentMeth = async (req, res, next) => {
  // Extrae del contenido de la request, el codigo Json,
  // const { category } = req.body
  // Realiza la validacion de la categoria,
  // console.log(category)

  const validationPaymentMeth = await validateSchema(createPaymentMethSchema, req.body)
  console.log(req.body)
  console.log(validationPaymentMeth.err)
  if (validationPaymentMeth.err) {
    res.status(400).json({ msg: validationPaymentMeth.err })
    return
  }

  next()
}
