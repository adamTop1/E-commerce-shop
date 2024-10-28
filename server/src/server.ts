import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import shopRoutes from './routes/shop'
import authRouter from './routes/auth'

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', function (req, res) {
	res.send('Hello World')
})

app.use(shopRoutes)
app.use(authRouter)

export default app