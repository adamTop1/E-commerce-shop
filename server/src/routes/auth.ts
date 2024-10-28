import { Router } from 'express'
import { createUser, deleteUser, getUser, loginUser } from '../controllers/auth'

const authRouter = Router()

authRouter.get('/auth', getUser)

authRouter.post('/auth', createUser)

authRouter.post('/auth', loginUser)

authRouter.delete('/auth', deleteUser)

export default authRouter
