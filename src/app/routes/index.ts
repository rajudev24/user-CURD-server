import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { PostRoutes } from '../modules/test/post.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/post',
    route: PostRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
