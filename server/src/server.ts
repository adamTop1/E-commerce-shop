import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRouter from './routes/auth'
import productRouter from './routes/product'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.use(authRouter)
app.use(productRouter)

export default app
