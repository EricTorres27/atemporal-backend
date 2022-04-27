import { Router } from 'express'
import { eventController } from '../controllers/events.controller'
import { authController } from '../controllers/auth.controller'
import { validateCreateEvent } from '../middlewares/event.middlewares'

const router = Router()

router.get('/', eventController.getAll)
router.get('/:id', eventController.getOne)

router.post('/', eventController.postOne)

router.post('/register_event', validateCreateEvent, authController.registerEvent)

router.put('/:id', eventController.updateOne)

router.delete('/:id', eventController.deleteOne)

module.exports = router
