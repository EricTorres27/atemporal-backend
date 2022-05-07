import { Router } from 'express'
import { eventController } from '../controllers/events.controller'
import { validateCreateEvent } from '../middlewares/event.middlewares'

const router = Router()

router.get('/', eventController.getAll)
router.get('/:idEvento', eventController.getOne)

router.post('/', eventController.postOne)

router.post('/registrar_evento', validateCreateEvent, eventController.registerEvent)
// router.post('/:id/registro/', eventController.registerAttendee)

router.put('/aprobar/:idEvento', eventController.aproveEvent)
router.put('/:idEvento', eventController.updateOne)

router.delete('/:idEvento', eventController.deleteOne)

module.exports = router
