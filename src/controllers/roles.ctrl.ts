import { Request, Response } from 'express'
import {
  createRole,
  deleteRole,
  getOneRole,
  getRoles,
  updateRole
} from '../services/roles.services'
import toNewRole from '../utils/role.util'

export const roleGetAll = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const roles = await getRoles()
  return res.json(roles)
}

export const roleGetOne = async (
  { params }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = params
    const role = await getOneRole(id)
    return res.json(role)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

export const rolePost = async (
  { body }: Request,
  res: Response
): Promise<Response> => {
  try {
    const newRole = toNewRole(body)
    const response = await createRole(newRole)
    return res.json(response)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

export const rolePut = async (
  { body, params }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = params
    const newRole = toNewRole(body)
    const response = await updateRole(id, newRole)
    return res.json(response)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

export const roleDelete = async (
  { params }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = params
    const response = await deleteRole(id)
    return res.json(response)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
