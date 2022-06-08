import { Router } from 'express'
import { eventController } from '../controllers/events.controller'
import { reservationController } from '../controllers/reservations.controller'
import { authMiddleware } from '../middlewares/auth.middleware'

const router = Router()

// User routes
router.get('/:idEvento', eventController.getOne)
router.get('/porEstado/:name', eventController.getAllByEstado)
router.get('/porCiudad/:name', eventController.getAllByCiudad)
router.post('/registrar-evento', eventController.registerEvent)
// Reservations
router.post('/reservar', eventController.registerAttendee)
router.delete('/cancelar-reservacion/:idUsuario',
  eventController.unregisterAttendee
)
router.put('/:idEvento', eventController.updateOne)
// Consulta de reservaciones
router.get('/reservaciones/eventos/:idEvento', reservationController.getAllReservationsByEvent) // Evento oruter
router.get('/:idEvento/reservan/:idUsuario', reservationController.getQrCodeByIds)
router.post('/reservaciones/verificar/', reservationController.getReservationByHash)

// Dashboard admin routes
router.get('/', authMiddleware.isAdmin, eventController.getAll)
router.put('/aprobar/:idEvento', authMiddleware.isAdmin, eventController.aproveEvent)
router.put('/rechazar/:idEvento', authMiddleware.isAdmin, eventController.rejectEvent)
router.delete('/:idEvento', authMiddleware.isAdmin, eventController.deleteOne)

module.exports = router
