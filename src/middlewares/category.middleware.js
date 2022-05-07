import Joi from 'joi'
import { validateSchema } from '../utils/validator'

const createCategorySchema = Joi.object({
  nombre: Joi.string().min(5).max(50).required()})

export const validateCreateCategory = async (req, res, next) => {

  const validationCategory = await validateSchema(createCategorySchema, req.body)
  console.log(req.body)
  console.log(validationCategory.err)
  if (validationCategory.err) {
    res.status(400).json({ msg: validationCategory.err })
    return
  }

  next()
}
