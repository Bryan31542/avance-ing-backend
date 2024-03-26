import { Auth } from './auth.interface'
import { Role } from './role.interface'

export interface User extends Auth {
  id: string
  name: string
  email: string
  roles: Role[]
}

export type NewUser = Omit<User, 'id'> & { roles: string[] }
export type UserNonSensitive = Omit<User, 'password'>

// add token to the User interface using intersection and UserNonSensitive
export type UserWithToken = User & { token: string } & UserNonSensitive
