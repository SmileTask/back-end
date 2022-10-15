import { Router } from 'express'
import { userLogin, userRegister} from '../controller/user.controller.js'

const router = Router()

router.post('/register', userRegister)
router.post('/login', userLogin)

export default router