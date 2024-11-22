import { Router } from 'express'
import { createNewProduct, getAllProducts, deleteProduct, updateProduct } from '../controllers/product'
import authenticateToken from '../middlewares/authenticateToken'

const productRouter = Router()

productRouter.get('/product', authenticateToken, getAllProducts)

productRouter.post('/product', createNewProduct)

productRouter.delete('/product', deleteProduct)

productRouter.put('/product', updateProduct)

export default productRouter
