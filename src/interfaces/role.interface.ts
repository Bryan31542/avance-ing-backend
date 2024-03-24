import { RoleName } from '../types/role.enum'

export interface Role {
  id: string
  name: RoleName
}

export type RoleWithoutId = Omit<Role, 'id'>
