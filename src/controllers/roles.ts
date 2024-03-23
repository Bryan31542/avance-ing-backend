/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { prisma } from '../../prisma/db'
import { Request, Response } from 'express'

export const roleGet = async (_req: Request, res: Response) => {
  const roles = await prisma.role.findMany()
  return res.json(roles)
}
