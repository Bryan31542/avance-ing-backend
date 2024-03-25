import { Request, Response } from 'express'
import { loginService, verifyTokenService } from '../services/auth.services'

export const login = async (
  { body }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { username, password } = body
    const response = await loginService({ username, password })

    res.cookie('token', response.token, {
      sameSite: 'none',
      secure: true
    })

    return res.json(response)
  } catch (error: any) {
    console.error(error.message)
    return res.status(401).json(error.message)
  }
}

export const verifyToken = async (
  { cookies }: Request,
  res: Response
): Promise<Response> => {
  try {
    const token = cookies.token
    const response = await verifyTokenService(token)
    return res.json(response)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

export const logout = async (
  _request: Request,
  response: Response
): Promise<Response> => {
  try {
    response.clearCookie('token')
    return response.json({ message: 'Logged out' })
  } catch (error) {
    console.error(error)
    return response.status(500).json({ error: 'Something went wrong' })
  }
}
