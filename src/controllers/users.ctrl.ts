import { Request, Response } from 'express'
import {
  removeRoleToUser,
  createUser,
  deleteUser,
  getOneUser,
  getUsers,
  updateUser,
  addRoleToUser
} from '../services/user.services'

export const usersGet = async (
  { query }: Request,
  res: Response
): Promise<Response> => {
  const { page, pageSize } = query

  const users = await getUsers(Number(page), Number(pageSize))
  return res.json(users)
}

export const usersGetOne = async (
  { params }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = params
    const user = await getOneUser(id)
    return res.json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

export const usersPost = async (
  { body }: Request,
  res: Response
): Promise<Response> => {
  try {
    const newUser = await createUser(body)
    return res.json(newUser)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

export const usersPut = async (
  { params, body }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = params
    const updatedUser = await updateUser(id, body)
    return res.json(updatedUser)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

export const usersDelete = async (
  { params }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = params
    const deletedUser = await deleteUser(id)
    return res.json(deletedUser)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

export const deleteRoleToUser = async (
  { params }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id, roleId } = params
    const updatedUser = await removeRoleToUser(id, roleId)
    return res.json(updatedUser)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

export const addRoleUser = async (
  { params }: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id, roleId } = params
    const updatedUser = await addRoleToUser(id, roleId)
    return res.json(updatedUser)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
