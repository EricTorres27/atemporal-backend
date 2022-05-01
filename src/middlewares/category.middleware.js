import Joi from 'joi'
import { validateSchema } from '../utils/validator'

// Create Category
const createCategorySchema = Joi.object({
  nombre: Joi.string().min(5).max(50).required(),
  esta_activo: Joi.boolean()
})

export const validateCreateCategory = async (req, res, next) => {
  // Extrae del contenido de la request, el codigo Json,
  // const { category } = req.body
  // Realiza la validacion de la categoria,
  // console.log(category)
  const validationCategory = await validateSchema(createCategorySchema, req.body)

  console.log(validationCategory.err)
  if (validationCategory.err) {
    res.status(400).json({ msg: validationCategory.err })
    return
  }

  next()
}
