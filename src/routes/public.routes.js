import { Router } from 'express'
import { userController } from '../controllers/users.controller'

const router = Router()

router.post('/register', userController.postOneUser)
router.post('/login', userController.postOneUser)

export default router
