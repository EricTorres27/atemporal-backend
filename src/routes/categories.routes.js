import { Router } from 'express'
import { categoryController } from '../controllers/category.controller'
import { authMiddleware } from '../middlewares/auth.middleware'
import { validateCreateCategory } from '../middlewares/category.middleware'

const router = Router()

router.get('/:id', authMiddleware.isAdmin, categoryController.getOne)
router.post('/',
  authMiddleware.isAdmin,
  validateCreateCategory,
  categoryController.postOne
)
router.put('/:id',
  authMiddleware.isAdmin,
  categoryController.updateOne
)
router.delete('/:id',
  authMiddleware.isAdmin,
  categoryController.deleteOne
)

module.exports = router
