/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { roleGet } from '../controllers/roles'

const router = Router()

// Get All Roles
router.get('/', roleGet)

export default router
