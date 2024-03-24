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
import { validateFields } from '../middleware/validator'
import { check } from 'express-validator'
import { roleExists, roleExistsById } from '../utils/db.util'

const router = Router()

// Get All Roles
router.get('/', [checkSession, validateFields], roleGetAll)

// GET a Role by ID
router.get(
  '/:id',
  [
    checkSession,
    check('id', 'is not a valid id').isUUID(),
    check('id').custom(roleExistsById),
    validateFields
  ],
  roleGetOne
)

// Create a Role
router.post(
  '/',
  [
    checkSession,
    check('name', 'name is required').not().isEmpty(),
    check('name').custom(roleExists),
    validateFields
  ],
  rolePost
)

// Update a Role
router.put(
  '/:id',
  [
    checkSession,
    check('id', 'id is required').not().isEmpty(),
    check('id', 'is not a valid id').isUUID(),
    check('id').custom(roleExistsById),
    validateFields
  ],
  rolePut
)

// Dele
router.delete(
  '/:id',
  [
    checkSession,
    check('id', 'id is required').not().isEmpty(),
    check('id', 'is not a valid id').isUUID(),
    check('id').custom(roleExistsById),
    validateFields
  ],
  roleDelete
)

export default router
