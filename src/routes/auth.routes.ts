/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { check } from 'express-validator'
import { login, logout, verifyToken } from '../controllers/auth.ctrl'
import { validateFields } from '../middleware/validator'
import { usersPost } from '../controllers/users.ctrl'
import { emailExists, usernameExists } from '../utils/db.util'

const router = Router()

router.post(
  '/login',
  [
    check('username', 'username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
  ],
  login
)

router.post(
  '/register',

  [
    check('email', 'email is required').isEmail(),
    check('email').custom(emailExists),
    check('username').custom(usernameExists),
    check('username', 'username is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
    validateFields
  ],
  usersPost
)

router.get('/verify', validateFields, verifyToken)

router.get('/logout', validateFields, logout)

export default router
