import { Router } from 'express'
import { homeGet } from '../controller/home.controller.js'

const router = Router()

router.get('/', homeGet)

export default router