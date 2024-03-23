/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { prisma } from '../../prisma/db'
import { Request, Response } from 'express'

export const roleGet = async (_req: Request, res: Response) => {
  const roles = await prisma.role.findMany({
    include: {
      users: true
    }
  })
  return res.json(roles)
}

export const rolePost = async (req: Request, res: Response) => {
  const { name } = req.body
  const role = await prisma.role.create({
    data: {
      name
    }
  })
  return res.json(role)
}
