/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  roleDelete,
  roleGetAll,
  roleGetOne,
  rolePost,
  rolePut
} from '../controllers/roles.ctrl'

const router = Router()

// Get All Roles
router.get('/', roleGetAll)

// GET a Role by ID
router.get('/:id', roleGetOne)

// Create a Role
router.post('/', rolePost)

// Update a Role
router.put('/:id', rolePut)

// Dele
router.delete('/:id', roleDelete)

export default router
