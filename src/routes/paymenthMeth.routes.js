import { Router } from 'express'
import { paymentMethController } from '../controllers/paymentMeth.controller'
import { validateCreatePaymentMeth } from '../middlewares/paymentMeth.middleware'

const router = Router()
// Metodos GET
router.get('/', paymentMethController.getAll) // ✅
router.get('/:id', paymentMethController.getOne) // ✅
// Metodos POST
router.post('/', validateCreatePaymentMeth, paymentMethController.postOne) // ✅
// Metodos PUT
router.put('/:id', paymentMethController.updateOne) // ✅
// Metodo DELETE
router.delete('/:id', paymentMethController.deleteOne) // ✅

module.exports = router
