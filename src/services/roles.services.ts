import { prisma } from '../../prisma/db'
import { Role, RoleWithoutId } from '../interfaces/role.interface'

export const getRoles = async (): Promise<Role[]> => {
  const roles = await prisma.role.findMany({ include: { users: true } })
  return roles as Role[]
}

export const getOneRole = async (id: string): Promise<Role | null> => {
  const role = await prisma.role.findUnique({
    where: { id },
    include: { users: true }
  })
  return role as Role
}

export const createRole = async (role: RoleWithoutId): Promise<Role> => {
  const newRole = await prisma.role.create({ data: role })
  return newRole as Role
}

export const updateRole = async (
  id: string,
  data: RoleWithoutId
): Promise<Role> => {
  const updatedRole = await prisma.role.update({
    where: { id },
    data
  })
  return updatedRole as Role
}

export const deleteRole = async (id: string): Promise<Role> => {
  const deletedRole = await prisma.role.delete({ where: { id } })
  return deletedRole as Role
}
