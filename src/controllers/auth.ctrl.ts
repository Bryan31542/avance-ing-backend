import { Request, Response } from 'express'
import { loginService } from '../services/auth.services'
import { encryptToken } from '../utils/crypto.util'

export const login = async (
  { body }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { username, password } = body
    const response = await loginService({ username, password })

    const encryptedToken = encryptToken(response.token)

    res.cookie('token', encryptedToken, {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      maxAge: 3600000
    })

    return res.json(response)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
