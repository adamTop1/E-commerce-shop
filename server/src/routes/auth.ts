import { Router } from 'express'
import { createUser, loginUser } from '../controllers/auth'
import { refreshToken } from '../utils/refreshToken'

const authRouter = Router()

authRouter.post('/auth/register', createUser)

authRouter.post('/auth/login', loginUser)

authRouter.post('/token', refreshToken)

export default authRouter
