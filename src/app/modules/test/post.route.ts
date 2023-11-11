import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { PostValidation } from './post.validation'
import { PostController } from './post.controller'
const router = express.Router()

router.post(
  '/add-post',
  validateRequest(PostValidation.createPostZodSchema),
  PostController.createPost,
)
router.get('/', PostController.getPost)
router.get('/:id', PostController.getPostById)
router.patch('/update-post/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)

export const PostRoutes = router
