import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET ?? ''

export const signToken = (id: string): string => {
  const token = sign({ id }, JWT_SECRET, { expiresIn: '1h' })
  return token
}

// export const verifyToken = () => {}
