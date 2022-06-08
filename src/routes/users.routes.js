import { Router } from 'express'
import { userController } from '../controllers/users.controller'
import { authMiddleware } from '../middlewares/auth.middleware'
import { reservationController } from '../controllers/reservations.controller'

const router = Router()

router.get('/', authMiddleware.isAdmin, userController.getAll)
router.get('/me', userController.whoIam)
router.get('/:id', userController.getOne)
router.put('/:id/actualizar-password', userController.updatePassword)
router.post('/', userController.postOneAdmin)
router.put('/:id', userController.updateOne)
router.delete('/:id', userController.deleteOne)

// Consulta de reservaciones
router.get('/:idUsuario/reservaciones', reservationController.getAllReservationsByUser)

module.exports = router
