import { Request, Response } from 'express';
import prisma from '../db';
import { CartItemRequestBody } from '../utils/zodSchema';

export const getAllCartProducts = async (req: Request, res: Response) => {
	try {
		const userId = req.userId;

		if (!userId) {
			return res.status(400).json({ error: 'User ID is required' });
		}

		const cart = await prisma.cart.findMany({
			where: { userId },
			include: {
				items: {
					include: {
						product: true,
					},
				},
			},
		});

		return res.status(200).json(cart);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: 'Failed to retrieve cart products' });
	}
};

export const updateCartItem = async (req: Request, res: Response) => {
	try {
		const { quantity, cartItemId } = req.body;

		if (!quantity || !cartItemId) {
			return res.status(400).json({ error: 'Quantity and cartItemId are required' });
		}

		const cartItem = await prisma.cartItem.update({
			where: { id: cartItemId },
			data: { quantity },
		});

		return res.status(200).json(cartItem);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: 'Failed to update cart item' });
	}
};

export const getCartItem = async (req: Request, res: Response) => {
	try {
		const { id } = req.body;

		if (!id) {
			return res.status(400).json({ error: 'Cart item ID is required' });
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: { id },
		});

		if (!cartItem) {
			return res.status(404).json({ error: 'Cart item not found' });
		}

		return res.status(200).json(cartItem);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: 'Failed to retrieve cart item' });
	}
};

export const addToCart = async (req: Request, res: Response) => {
	try {
		const userId = req.userId;
		const { productId, quantity }: CartItemRequestBody = req.body;

		if (!userId || !productId || !quantity) {
			return res.status(400).json({ error: 'User ID, product ID, and quantity are required' });
		}

		const existingCartItem = await prisma.cartItem.findFirst({
			where: {
				productId,
				cart: { userId },
			},
		});

		let cartItem;
		if (existingCartItem) {
			cartItem = await prisma.cartItem.update({
				where: { id: existingCartItem.id },
				data: { quantity: existingCartItem.quantity + quantity },
			});
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
			});
		}

		return res.status(201).json(cartItem);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: 'An error occurred while adding to cart' });
	}
};
