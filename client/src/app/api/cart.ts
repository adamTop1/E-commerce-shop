import { cartItemType } from '@/types/product'
import api from './axiosApi'

export const getCart = async () => {
	return await api.get('/cart')
}

export const addToCart = async ({ productId, quantity }: cartItemType) => {
	return await api.post('/cart', { productId, quantity })
}
