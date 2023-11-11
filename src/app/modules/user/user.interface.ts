import mongoose, { Model } from 'mongoose'

export type IUser = {
  _id: mongoose.ObjectId
  email: string
  password: string
  name: string
}

export interface ILoginUser {
  email: string
  password: string
}
export type ILoginResponse = {
  accessToken: string
  refreshToken?: string
}

export type IRefreshTokenResponse = {
  accessToken: string
}

// Static Method
export type UserModel = {
  isUserExist(email: string): Promise<Pick<IUser, 'password' | '_id'>>
  isPasswordMatched(
    currentPassword: string,
    savedPassword: string,
  ): Promise<boolean>
} & Model<IUser>
