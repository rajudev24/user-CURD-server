import { IPost } from './post.interface'
import { Post } from './post.model'

const createPost = async (payload: IPost): Promise<IPost> => {
  const result = await Post.create(payload)
  return result
}
const getPost = async (): Promise<IPost[]> => {
  const result = await Post.find()
  return result
}

const getPostById = async (id: string): Promise<IPost[]> => {
  const result = await Post.find({ authorId: id })
  return result
}

const updatePost = async (id: string, payload: Partial<IPost>) => {
  const result = await Post.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deletePost = async (id: string): Promise<IPost | null> => {
  const result = await Post.findOneAndDelete({ _id: id })
  return result
}

export const PostServices = {
  createPost,
  getPost,
  getPostById,
  deletePost,
  updatePost,
}
