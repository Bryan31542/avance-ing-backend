/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  roleDelete,
  roleGetAll,
  roleGetOne,
  rolePost,
  rolePut
} from '../controllers/roles.ctrl'
import { checkSession } from '../middleware/session'

const router = Router()

// Get All Roles
router.get('/', checkSession, roleGetAll)

// GET a Role by ID
router.get('/:id', checkSession, roleGetOne)

// Create a Role
router.post('/', checkSession, rolePost)

// Update a Role
router.put('/:id', checkSession, rolePut)

// Dele
router.delete('/:id', checkSession, roleDelete)

export default router
