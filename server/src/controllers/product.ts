import prisma from '../db'
import { Request, Response } from 'express'

export const getAllProducts = async (req: Request, res: Response) => {
	const products = await prisma.product.findMany()
	res.json(products)
}

export const createNewProduct = async (req: Request, res: Response) => {
	const product = await prisma.product.create({
		data: {
			name: req.body.name,
			price: req.body.price,
			image: req.body.image,
			stock: req.body.stock,
		},
	})
	res.json(product)
}

export const deleteProduct = async (req: Request, res: Response) => {
	const product = await prisma.product.delete({
		where: {
			id: req.body.id,
		},
	})
	res.json(product)
}
