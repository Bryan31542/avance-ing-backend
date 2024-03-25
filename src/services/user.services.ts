import { prisma } from '../../prisma/db'
import { NewUser, UserNonSensitive } from '../interfaces/user.interface'
import { encrypt } from '../utils/bcrypt.util'

export const getUsers = async (
  page: number,
  pageSize: number
): Promise<UserNonSensitive[]> => {
  const validPage = page > 0 ? page : 1
  const validPageSize = pageSize > 0 ? pageSize : 5
  const skip = (validPage - 1) * validPageSize
  const users = await prisma.user.findMany({
    include: { role: true },
    skip,
    take: validPageSize
  })
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

export const createUser = async (
  user: NewUser
): Promise<UserNonSensitive | string> => {
  const passwordHash = await encrypt(user.password)

  const newUser = await prisma.user.create({
    data: { ...user, password: passwordHash }
  })

  const { password, roleId, ...userData } = newUser
  return userData as UserNonSensitive
}

export const updateUser = async (
  id: string,
  user: NewUser
): Promise<UserNonSensitive | null> => {
  const updatedUser = await prisma.user.update({
    where: { id },
    data: user,
    include: { role: true }
  })

  if (updatedUser === null) {
    return null
  }

  const { password, roleId, ...userData } = updatedUser
  return userData as UserNonSensitive
}

export const deleteUser = async (
  id: string
): Promise<UserNonSensitive | null> => {
  const deletedUser = await prisma.user.delete({
    where: { id },
    include: { role: true }
  })

  if (deletedUser === null) {
    return null
  }

  const { password, roleId, ...userData } = deletedUser
  return userData as UserNonSensitive
}
