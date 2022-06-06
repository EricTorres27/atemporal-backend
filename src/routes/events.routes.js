import { Router } from 'express'
import { eventController } from '../controllers/events.controller'
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

// Dashboard admin routes
router.get('/', authMiddleware.isAdmin, eventController.getAll)
router.put('/aprobar/:idEvento', authMiddleware.isAdmin, eventController.aproveEvent)
router.put('/rechazar/:idEvento', authMiddleware.isAdmin, eventController.rejectEvent)
router.delete('/:idEvento', authMiddleware.isAdmin, eventController.deleteOne)

module.exports = router
