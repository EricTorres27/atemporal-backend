import { Router } from 'express'
import { userController } from '../controllers/users.controller'
import { validateCreateAccount } from '../middlewares/user.middlewares'

const router = Router()

router.get('/', userController.getAll)
router.get('/me', userController.whoIam)
router.get('/:id', userController.getOne)

router.post('/', validateCreateAccount, userController.postOneAdmin)
router.put('/:id', userController.updateOne)

router.delete('/:id', userController.deleteOne)

module.exports = router
