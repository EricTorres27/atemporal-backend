import { Router } from 'express'
import { stateController } from '../controllers/states.controller'

const router = Router()

router.get('/', stateController.getAll)
router.get('/:id', stateController.getOne)

module.exports = router
