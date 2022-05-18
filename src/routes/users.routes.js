import { Router } from 'express'
import { userController } from '../controllers/users.controller'

const router = Router()

router.get('/', userController.getAll)
router.get('/me', userController.whoIam)
router.get('/:id', userController.getOne)
router.put('/:id/actualizar-password', userController.updatePassword)
router.post('/', userController.postOneAdmin)
router.put('/:id', userController.updateOne)
router.delete('/:id', userController.deleteOne)

module.exports = router
