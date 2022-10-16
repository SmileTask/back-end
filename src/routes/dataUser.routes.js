import { Router } from 'express'
import { userImage, userImageDelete } from '../controller/dataUser.controller.js'

const router = Router()

router.post('/image', userImage)
router.post('/image/delete', userImageDelete)

export default router