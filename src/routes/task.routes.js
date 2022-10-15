import { Router } from 'express'
import { taskFind, taskCreate } from '../controller/task.controller.js'

const router = Router()

router.get('/', taskFind)
router.post('/', taskCreate)

export default router