/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { prisma } from '../../prisma/db'
import { Request, Response } from 'express'

export const usersGet = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    include: {
      role: true
    }
  })
  return res.json(users)
}

export const usersPost = async (req: Request, res: Response) => {
  const { name, username, email, password, roleId } = req.body
  const user = await prisma.user.create({
    data: {
      name,
      username,
      email,
      password,
      roleId
    }
  })
  return res.json(user)
}
