import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { PostServices } from './post.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createPost = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body
  const result = await PostServices.createPost(data)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post added successfully',
    data: result,
  })
})
const getPost = catchAsync(async (req: Request, res: Response) => {
  const result = await PostServices.getPost()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post fatched successfully',
    data: result,
  })
})
const getPostById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await PostServices.getPostById(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post fatched successfully',
    data: result,
  })
})
const updatePost = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await PostServices.updatePost(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post updated successfully',
    data: result,
  })
})
const deletePost = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await PostServices.deletePost(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post Deleted successfully',
    data: result,
  })
})

export const PostController = {
  createPost,
  getPost,
  getPostById,
  deletePost,
  updatePost,
}
