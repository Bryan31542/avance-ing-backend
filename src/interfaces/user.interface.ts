import { RoleName } from '../types/role.enum'

export interface User {
  id: string
  name: string
  username: string
  email: string
  password: string
  roleId: string
  role: RoleName
}

export type UserWithoutId = Omit<User, 'id'>
export type NewUser = Omit<User, 'id' | 'role'>
export type UserNonSensitive = Omit<User, 'password'> & { role: RoleName }
