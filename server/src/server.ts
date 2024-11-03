import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRouter from './routes/auth'
import productRouter from './routes/product'

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(productRouter)
app.use(authRouter)

export default app