import { Router } from 'express'
import { authController } from '../controllers/auth.controller'
import { validateCreateAccount, validateLogin } from '../middlewares/user.middlewares'
import { validateCreateEvent } from '../middlewares/event.middlewares'

const router = Router()

router.post('/register', validateCreateAccount, authController.registerAccount)
router.post('/register_event', validateCreateEvent, authController.registerEvent)
router.post('/login', validateLogin, authController.loginUser)

export default router
