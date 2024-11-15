import { Router } from 'express'
import { getUser, deleteUser } from '../controllers/user'
import authenticateToken from '../middlewares/authenticateToken'

const userRouter = Router()

userRouter.get('/user', authenticateToken, getUser)
userRouter.delete('/user/delete', deleteUser)

export default userRouter
