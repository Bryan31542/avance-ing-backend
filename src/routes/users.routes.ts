/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { usersGet, usersPost } from '../controllers/users.ctrl'

const router = Router()

router.get('/', usersGet)

router.post('/', usersPost)

export default router
