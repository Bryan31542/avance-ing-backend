import { Request, Response } from 'express'
import { createUser, getOneUser, getUsers } from '../services/user.services'

export const usersGet = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const users = await getUsers()
  return res.json(users)
}

export const usersGetOne = async (
  { params }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = params
    const user = await getOneUser(id)
    return res.json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
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
