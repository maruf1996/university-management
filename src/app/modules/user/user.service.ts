import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // If password is not given,set default password
  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  // console.log(createdUser)

  if (!createdUser) {
    throw new Error('Failed to create User')
  }
  return createdUser
}

export const userService = { createUser }
