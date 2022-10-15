import { Router } from 'express'
import { userImage } from '../controller/dataUser.controller.js'

const router = Router()

router.post('/image', userImage)

export default router