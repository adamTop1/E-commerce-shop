import { Router } from 'express'
import { createNewProduct, getAllProducts, deleteProduct } from '../controllers/product'

const productRouter = Router()

productRouter.get('/product', getAllProducts)

productRouter.post('/product', createNewProduct)

productRouter.delete('/product', deleteProduct)

export default productRouter