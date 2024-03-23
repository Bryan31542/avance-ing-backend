/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { usersGet } from '../controllers/users'

const router = Router()

router.get('/', usersGet)

export default router
