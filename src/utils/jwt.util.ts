import { sign, verify, JwtPayload } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET ?? ''

export const signToken = (id: string): string => {
  const token = sign({ id }, JWT_SECRET, { expiresIn: '1h' })
  return token
}

export const verifyToken = (jwt: string): boolean => {
  try {
    const isValid = Boolean(verify(jwt, JWT_SECRET) as JwtPayload)
    return isValid
  } catch (error) {
    return false
  }
}

export const decodeToken = (jwt: string): JwtPayload | null => {
  try {
    const decoded = verify(jwt, JWT_SECRET) as JwtPayload
    return decoded
  } catch (error) {
    return null
  }
}
