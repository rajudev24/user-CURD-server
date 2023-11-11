import { Schema, model } from 'mongoose'

import { IPost, PostModel } from './post.interface'

export const PostSchema = new Schema<IPost, PostModel>(
  {
    text: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    profession: { type: String, required: true },
    subProfession: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Post = model<IPost, PostModel>('Post', PostSchema)
