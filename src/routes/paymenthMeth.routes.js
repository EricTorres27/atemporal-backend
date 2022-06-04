import { Router } from 'express'
import { paymentMethController } from '../controllers/paymentMeth.controller'
import { authMiddleware } from '../middlewares/auth.middleware'
import { validateCreatePaymentMeth } from '../middlewares/paymentMeth.middleware'

const router = Router()
router.get('/', paymentMethController.getAll)
router.get('/:id', authMiddleware.isAdmin, paymentMethController.getOne)
router.post('/',
  authMiddleware.isAdmin,
  validateCreatePaymentMeth,
  paymentMethController.postOne
)
router.put('/:id', authMiddleware.isAdmin, paymentMethController.updateOne)
router.delete('/:id', authMiddleware.isAdmin, paymentMethController.deleteOne)

module.exports = router
