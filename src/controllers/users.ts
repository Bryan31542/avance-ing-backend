/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { prisma } from '../../prisma/db'
import { Request, Response } from 'express'

const usersGet = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  return res.json(users)
}

export default { usersGet }
