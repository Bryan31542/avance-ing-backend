import { Auth } from './auth.interface'
import { Role } from './role.interface'

export interface User extends Auth {
  id: string
  name: string
  email: string
  roleId: string
  role: Role
}

export type UserWithoutId = Omit<User, 'id'>
export type NewUser = Omit<User, 'id' | 'role'>
export type UserNonSensitive = Omit<User, 'password' | 'roleId'>
