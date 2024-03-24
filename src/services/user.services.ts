import { prisma } from '../../prisma/db'
import { NewUser, UserNonSensitive } from '../interfaces/user.interface'

export const getUsers = async (): Promise<UserNonSensitive[]> => {
  const users = await prisma.user.findMany({ include: { role: true } })
  return users.map(
    ({ password, roleId, ...userData }) => userData
  ) as UserNonSensitive[]
}

export const getOneUser = async (
  id: string
): Promise<UserNonSensitive | null> => {
  const user = await prisma.user.findUnique({
    where: { id },
    include: { role: true }
  })

  if (user === null) {
    return null // Return null if the user with the specified ID is not found
  }

  // Omit the password field and return the user data
  const { password, roleId, ...userData } = user
  return userData as UserNonSensitive
}

export const createUser = async (user: NewUser): Promise<NewUser> => {
  const newUser = await prisma.user.create({ data: user })
  return newUser as NewUser
}
