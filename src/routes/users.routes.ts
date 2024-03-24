/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  usersDelete,
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

router.delete('/:id', usersDelete)

export default router
