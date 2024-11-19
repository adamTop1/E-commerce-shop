import { Router } from 'express'
import { addToCart, getAllCartProducts } from '../controllers/cart'
import authenticateToken from '../middlewares/authenticateToken'

const cartRouter = Router()

cartRouter.get('/cart', authenticateToken, getAllCartProducts)
cartRouter.post('/cart', authenticateToken, addToCart)

export default cartRouter