import prisma from '../db'

export const getAllProducts = async (req, res) => {
	const products = await prisma.product.findMany()
	res.json(products)
}

export const createNewProduct = async (req, res) => {
	const product = await prisma.product.create({
		data: {
			name: req.body.name,
			price: req.body.price,
			image: req.body.image,
		},
	})
	res.json(product)
}

export const deleteProduct = async (req, res) => {
	const product = await prisma.product.delete({
		where: {
			id: req.body.id,
		},
	})
	res.json(product)
}
