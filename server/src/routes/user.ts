import { Router } from 'express'
import { getUser, deleteUser, getUserById } from '../controllers/user'
import authenticateToken from '../middlewares/authenticateToken'

const userRouter = Router()

userRouter.get('/user', authenticateToken, getUser)
userRouter.get('/userId', authenticateToken, getUserById)
userRouter.delete('/user/delete', deleteUser)

export default userRouter
