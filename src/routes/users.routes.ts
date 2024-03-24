/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { usersGet, usersGetOne, usersPost } from '../controllers/users.ctrl'

const router = Router()

router.get('/', usersGet)

router.get('/:id', usersGetOne)

router.post('/', usersPost)

export default router
