import { prisma } from '../../prisma/db'
import { Auth } from '../interfaces/auth.interface'
import { UserWithToken } from '../interfaces/user.interface'
import { verify } from '../utils/bcrypt.util'
import { signToken } from '../utils/jwt.util'

export const loginService = async ({
  username,
  password
}: Auth): Promise<UserWithToken> => {
  // check if the user with the specified email already exists
  const existingUser = await prisma.user.findUnique({
    where: { username },
    include: { role: true }
  })

  if (existingUser === null) throw new Error('User not found')

  const passwordHash = existingUser.password
  const isCorrect = await verify(password, passwordHash)

  if (!isCorrect) throw new Error('Check credentials and try again')

  const token = signToken(existingUser.id)

  const data = {
    ...existingUser,
    token
  }

  return data as UserWithToken
}
