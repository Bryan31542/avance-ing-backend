/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { roleGet, rolePost } from '../controllers/roles'

const router = Router()

// Get All Roles
router.get('/', roleGet)

// Post a Role
router.post('/', rolePost)

export default router
