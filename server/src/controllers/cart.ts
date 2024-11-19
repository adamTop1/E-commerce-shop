import prisma from '../db'
import { CartItemRequestBody } from '../utils/zodSchema'

export const getAllCartProducts = async (req: any, res: any) => {
	const cart = await prisma.cart.findMany({
		where: { userId: req.userId },
		include: {
			items: {
				include: {
					product: true,
				},
			},
		},
	})
	return res.json(cart).status(200)
}

export const getCartItem = async (req: any, res: any) => {
	const cartItem = await prisma.cartItem.findFirst({
		where: {
			id: req.body.id,
		},
	})
	return res.json(cartItem).status(200)
}

export const addToCart = async (req: any, res: any) => {
	try {
		const userId = req.userId
		const { productId, quantity }: CartItemRequestBody = req.body
		if (!productId || !userId || !quantity) {
			return res.status(400).json({ error: 'productId, and quantity are required' })
		}

		const existingCartItem = await prisma.cartItem.findFirst({
			where: {
				productId,
				cart: {
					userId,
				},
			},
		})

		let cartItem
		if (existingCartItem) {
			cartItem = await prisma.cartItem.update({
				where: { id: existingCartItem.id },
				data: { quantity: existingCartItem.quantity + quantity },
			})
		} else {
			cartItem = await prisma.cartItem.create({
				data: {
					product: { connect: { id: productId } },
					quantity,
					cart: {
						connectOrCreate: {
							where: { userId },
							create: { userId },
						},
					},
				},
			})
		}

		return res.json(cartItem).status(201)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: 'An error occurred while adding to cart' })
	}
}
