/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  usersDelete,
  usersGet,
  usersGetOne,
  usersPost,
  usersPut,
  deleteRoleToUser
} from '../controllers/users.ctrl'
import { checkSession } from '../middleware/session'
import { validateFields } from '../middleware/validator'
import { check } from 'express-validator'
import { emailExists, userExistsById, usernameExists } from '../utils/db.util'

const router = Router()

router.get('/', [checkSession, validateFields], usersGet)

router.get(
  '/:id',
  [
    checkSession,
    check('id', 'is not a valid id').isUUID(),
    check('id').custom(userExistsById),
    validateFields
  ],
  usersGetOne
)

// add role to user
router.delete(
  '/:id/roles/:roleId',
  [checkSession, validateFields],
  deleteRoleToUser
)

router.post(
  '/',
  [
    checkSession,
    check('email', 'email is required').isEmail(),
    check('email').custom(emailExists),
    check('username').custom(usernameExists),
    check('username', 'username is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
    validateFields
  ],
  usersPost
)

router.put(
  '/:id',
  [
    checkSession,
    check('id', 'id is required').not().isEmpty(),
    check('id', 'is not a valid id').isUUID(),
    check('id').custom(userExistsById),
    validateFields
  ],
  usersPut
)

router.delete(
  '/:id',
  [
    checkSession,
    check('id', 'id is required').not().isEmpty(),
    check('id', 'is not a valid id').isUUID(),
    check('id').custom(userExistsById),
    validateFields
  ],
  usersDelete
)

export default router
