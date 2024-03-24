import { Request, Response } from 'express'
import { loginService } from '../services/auth.services'

export const login = async (
  { body }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { username, password } = body
    const response = await loginService({ username, password })
    return res.json(response)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
