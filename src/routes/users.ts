/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { prisma } from '../../prisma/db'

const router = Router()

router.get('/', async (_req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

export default router
