/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.util'

export const checkSession = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtUser = req.headers.authorization ?? ''
    const jwt = jwtUser.split(' ').pop() ?? ''

    const checkToken = verifyToken(jwt)

    if (!checkToken) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    next()

    return ''
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
