/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  usersDelete,
  usersGet,
  usersGetOne,
  usersPost,
  usersPut
} from '../controllers/users.ctrl'
import { checkSession } from '../middleware/session'

const router = Router()

router.get('/', checkSession, usersGet)

router.get('/:id', checkSession, usersGetOne)

router.post('/', checkSession, usersPost)

router.put('/:id', checkSession, usersPut)

router.delete('/:id', checkSession, usersDelete)

export default router
