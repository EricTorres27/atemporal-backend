import { Router } from 'express'
import { authController } from '../controllers/auth.controller'
import { validateCreateAccount, validateLogin, validatePassword } from '../middlewares/user.middlewares'

const router = Router()

router.post('/register', validateCreateAccount, authController.registerAccount)
router.post('/login', validateLogin, authController.loginUser)
router.post('/recuperar-password', validatePassword, authController.recoverPassword)

export default router
