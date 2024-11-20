import { Router } from 'express'
import { addToCart, getAllCartProducts, updateCartItem } from '../controllers/cart'
import authenticateToken from '../middlewares/authenticateToken'

const cartRouter = Router()

cartRouter.get('/cart', authenticateToken, getAllCartProducts)
cartRouter.post('/cart', authenticateToken, addToCart)
cartRouter.put('/cart', authenticateToken, updateCartItem)

export default cartRouter
