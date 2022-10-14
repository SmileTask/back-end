import { Router } from 'express'
import { apiUserGet, apiUserPost } from '../controller/user.controller.js'

const router = Router()

router.get('/', apiUserGet)
router.post('/', apiUserPost)

export default router