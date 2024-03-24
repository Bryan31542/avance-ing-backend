import { RoleWithoutId } from '../interfaces/role.interface'
import { RoleName } from '../types/role.enum'

const parseRoleName = (roleFromRequest: any): RoleName => {
  if (!isString(roleFromRequest) || !isRoleName(roleFromRequest)) {
    throw new Error('Invalid role name')
  }

  return roleFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isRoleName = (param: any): boolean => {
  return Object.values(RoleName).includes(param)
}

const toNewRole = (object: any): RoleWithoutId => {
  return {
    name: parseRoleName(object.name)
  }
}

export default toNewRole
