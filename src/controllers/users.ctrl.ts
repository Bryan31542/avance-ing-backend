import { Request, Response } from 'express'
import { createUser, getUsers } from '../services/user.services'

export const usersGet = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const users = await getUsers()
  return res.json(users)
}

export const usersPost = async (
  { body }: Request,
  res: Response
): Promise<Response> => {
  try {
    const newUser = await createUser(body)
    return res.json(newUser)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
