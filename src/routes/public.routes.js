import { Router } from 'express'
import { authController } from '../controllers/auth.controller'
import { validateCreateAccount, validateLogin } from '../middlewares/user.middlewares'

const router = Router()

router.post('/register', validateCreateAccount, authController.registerAccount)
router.post('/login', validateLogin, authController.loginUser)

export default router
