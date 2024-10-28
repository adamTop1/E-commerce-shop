import { Router } from 'express'
import { createNewProduct, getAllProducts, deleteProduct } from '../controllers/shop'

const shopRouter = Router()

shopRouter.get('/shop', getAllProducts)

shopRouter.post('/shop', createNewProduct)

shopRouter.delete('/shop', deleteProduct)

export default shopRouter