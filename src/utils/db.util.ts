import { prisma } from '../../prisma/db'

// Check if the email exists in the database
export const emailExists = async (email: string): Promise<void> => {
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  console.log(existingUser)

  if (existingUser !== null && existingUser !== undefined) {
    throw new Error('Email already exists')
  }
}

export const roleExists = async (role: string): Promise<void> => {
  const existingRole = await prisma.role.findUnique({
    where: { name: role }
  })

  console.log(existingRole)

  if (existingRole !== null && existingRole !== undefined) {
    throw new Error('Role already exists')
  }
}

export const usernameExists = async (username: string): Promise<void> => {
  const existingUser = await prisma.user.findUnique({
    where: { username }
  })

  if (existingUser !== null && existingUser !== undefined) {
    throw new Error('Username already exists')
  }
}

// Check if the role with the specified ID exists
export const roleExistsById = async (roleId: string): Promise<void> => {
  const existingRole = await prisma.role.findUnique({
    where: { id: roleId }
  })

  if (existingRole === null || existingRole === undefined) {
    throw new Error('Role not found')
  }
}

export const userExistsById = async (userId: string): Promise<void> => {
  const existingUser = await prisma.user.findUnique({
    where: { id: userId }
  })

  if (existingUser === null || existingUser === undefined) {
    throw new Error('User not found')
  }
}
