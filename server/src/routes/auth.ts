import { Router } from 'express'
import { createUser, deleteUser, getUser, loginUser } from '../controllers/auth'
import { refreshToken } from '../utils/refreshToken'

const authRouter = Router()

authRouter.get('/user', getUser)

authRouter.post('/auth/create', createUser)

authRouter.post('/auth/login', loginUser)

authRouter.delete('/auth/delete', deleteUser)

authRouter.post('/token', refreshToken)

export default authRouter
