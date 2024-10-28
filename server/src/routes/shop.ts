import { Router } from 'express'
import { createNewProduct, getAllProducts, deleteProduct } from '../controllers/shop'

const router = Router()

router.get('/shop', getAllProducts)

router.post('/shop', createNewProduct)

router.delete('/shop', deleteProduct)

export default router