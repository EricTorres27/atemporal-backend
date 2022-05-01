import { Router } from 'express'
import { categoryController } from '../controllers/category.controller'
import { validateCreateCategory } from '../middlewares/category.middleware'

const router = Router()
// Metodos GET
router.get('/', categoryController.getAll) // ✅
router.get('/:id', categoryController.getOne) // ✅
// Metodos POST
router.post('/', validateCreateCategory, categoryController.postOne) // ✅
// Metodos PUT
router.put('/:id', categoryController.updateOne) // ✅
// Metodo DELETE
router.delete('/:id', categoryController.deleteOne) // ✅

module.exports = router
