import { Router } from 'express'
import { userController } from '../controllers/users.controller'
import { authMiddleware } from '../middlewares/auth.middleware'
import { reservationController } from '../controllers/reservations.controller'

const router = Router()
// Consulta de reservaciones
router.get('/reservaciones', reservationController.getAllReservationsByUser)

router.get('/', authMiddleware.isAdmin, userController.getAll)
router.get('/me', userController.whoIam)
router.get('/:id', userController.getOne)
router.put('/:id/actualizar-password', userController.updatePassword)
router.post('/', userController.postOneAdmin)
router.put('/:id', userController.updateOne)
router.delete('/:id', userController.deleteOne)

// Consulta de reservaciones
router.get('/:idUsuario/reservaciones', reservationController.getAllReservationsByUser)

// Consulta de publicaciones
router.get('/publicaciones/aprobadas/', userController.getAllMyPublicationsApproved)
router.get('/publicaciones/porAprobar/', userController.getAllMyPublicationsToApprove)
module.exports = router
