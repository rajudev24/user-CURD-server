import mongoose, { Model } from 'mongoose'

export interface IPost {
  text: string
  authorId: mongoose.Schema.Types.ObjectId
  profession: string
  subProfession: string
}

export type PostModel = Model<IPost, Record<string, unknown>>
