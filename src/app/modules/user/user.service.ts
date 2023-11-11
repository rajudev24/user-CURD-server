import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { ILoginResponse, ILoginUser, IUser } from './user.interface'
import { User } from './user.model'
import { jwtHelpers } from '../../../helpers/jwtHealpers'
import { Secret } from 'jsonwebtoken'
import config from '../../../config'

const createUser = async (payload: IUser) => {
  const result = await User.create(payload)
  return result
}

const loginUser = async (payload: ILoginUser): Promise<ILoginResponse> => {
  const { email, password } = payload
  // Check user exist
  const isUserExist = await User.isUserExist(email)
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }
  // Macth Password
  const isPasswordMatched = await User.isPasswordMatched(
    password,
    isUserExist?.password,
  )
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  // Create Access Token & Refresh Token
  const { _id } = isUserExist
  const accessToken = jwtHelpers.createToken(
    {
      _id,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  )

  const refreshToken = jwtHelpers.createToken(
    {
      _id,
    },
    config.jwt.refresh_secrect as Secret,
    config.jwt.refresh_expires_in as string,
  )

  return {
    accessToken,
    refreshToken,
  }
}

export const UserService = {
  createUser,
  loginUser,
}
