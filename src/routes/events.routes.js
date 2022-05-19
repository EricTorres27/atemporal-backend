import { Router } from 'express'
import { eventController } from '../controllers/events.controller'
import { validateCreateEvent } from '../middlewares/event.middlewares'

const router = Router()

router.get('/', eventController.getAll)
router.get('/:idEvento', eventController.getOne)
router.get('/porCategoria/:idCategoria', eventController.getEventsByCategory)
router.get('/porTexto/:texto', eventController.getEventsByTextSearch)

// router.post('/', eventController.postOne)

router.post('/registrar-evento', eventController.registerEvent)
router.post('/reservar', eventController.registerAttendee)
router.delete('/cancelar-reservacion/:idUsuario', eventController.unregisterAttendee)

router.put('/aprobar/:idEvento', eventController.aproveEvent)
router.put('/rechazar/:idEvento', eventController.rejectEvent)
router.put('/:idEvento', eventController.updateOne)

router.delete('/:idEvento', eventController.deleteOne)

module.exports = router
