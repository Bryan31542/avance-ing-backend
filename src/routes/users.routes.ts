/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  usersGet,
  usersGetOne,
  usersPost,
  usersPut
} from '../controllers/users.ctrl'

const router = Router()

router.get('/', usersGet)

router.get('/:id', usersGetOne)

router.post('/', usersPost)

router.put('/:id', usersPut)

export default router
