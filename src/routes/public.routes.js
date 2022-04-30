import { Router } from 'express'
import { authController } from '../controllers/auth.controller'
import { userController } from '../controllers/users.controller'
import { authMiddleware } from '../middlewares/auth.middleware'
import { userMiddleware } from '../middlewares/user.middlewares'

const router = Router()

router.post('/register',
  userMiddleware.validateCreateAccount, authController.registerAccount)
router.post('/login',
  userMiddleware.validateLogin, authController.loginUser)
router.post('/recuperar-password',
  userMiddleware.validateEmail, authController.recoverPassword)
router.put('/cambiar-password',
  userMiddleware.validatePassword,
  authMiddleware.verifyTokenRecoverPassword,
  userController.recoverPassword
)
export default router
