import { RoleName } from '../types/role.enum'

export interface User {
  id: string
  name: string
  username: string
  email: string
  role: RoleName
}
