import { Router } from 'express'
import { authController } from '../controllers/auth.controller'
import { categoryController } from '../controllers/category.controller'
import { eventController } from '../controllers/events.controller'
import { reservationController } from '../controllers/reservations.controller'
import { userController } from '../controllers/users.controller'
import { authMiddleware } from '../middlewares/auth.middleware'
import { userMiddleware } from '../middlewares/user.middlewares'

const router = Router()
// Events
router.get('/', (_, res) => res.json({ msg: 'Backend is live 🤠' }))
router.get('/eventos', eventController.getAll)
router.get('/eventos/:idEvento', eventController.getOne)
router.get('/eventos/porCategoria/:idCategoria', eventController.getEventsByCategory)
router.get('/eventos/porTexto/:texto', eventController.getEventsByTextSearch)
// Categories
router.get('/categorias', categoryController.getAll)
// Authentication
router.post('/register',
  userMiddleware.validateCreateAccount,
  authController.registerAccount
)
router.post('/login',
  userMiddleware.validateLogin,
  authController.loginUser
)
router.post('/recuperar-password',
  userMiddleware.validateEmail,
  authController.recoverPassword
)
router.put('/cambiar-password',
  userMiddleware.validatePassword,
  authMiddleware.verifyTokenRecoverPassword,
  userController.recoverPassword
)
router.post('/reservaciones/verificar/', reservationController.getReservationByHash)
export default router
