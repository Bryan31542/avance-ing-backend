import { prisma } from '../../prisma/db'
import { NewUser, UserNonSensitive } from '../interfaces/user.interface'

export const getUsers = async (): Promise<UserNonSensitive[]> => {
  const users = await prisma.user.findMany({ include: { role: true } })
  return users.map(({ password, ...user }) => ({
    ...user,
    role: user.role.name // Assuming "role" has a "name" property
  })) as UserNonSensitive[]
}

export const createUser = async (user: NewUser): Promise<NewUser> => {
  const newUser = await prisma.user.create({ data: user })
  return newUser as NewUser
}
