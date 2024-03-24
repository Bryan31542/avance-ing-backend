import { prisma } from '../../prisma/db'
import { Auth } from '../interfaces/auth.interface'
import { UserNonSensitive } from '../interfaces/user.interface'
import { verify } from '../utils/bcrypt.util'

export const loginService = async ({
  username,
  password
}: Auth): Promise<UserNonSensitive> => {
  // check if the user with the specified email already exists
  const existingUser = await prisma.user.findUnique({
    where: { username }
  })

  if (existingUser === null) throw new Error('User not found')

  const passwordHash = existingUser.password
  const isCorrect = await verify(password, passwordHash)

  if (!isCorrect) throw new Error('Check credentials and try again')

  const { password: userPassword, roleId, ...userData } = existingUser
  return userData as UserNonSensitive
}
