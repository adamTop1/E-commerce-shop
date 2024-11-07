import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRouter from './routes/auth'
import productRouter from './routes/product'
import authenticateToken from './middlewares/authenticateToken'

const app = express()


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.use(authenticateToken, productRouter)
app.use(authRouter)

export default app
