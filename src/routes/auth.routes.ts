/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { login } from '../controllers/auth.ctrl'

const router = Router()

router.post('/login', login)

export default router
