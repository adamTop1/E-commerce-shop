import prisma from '../db'
import { Request, Response } from 'express'

export const getUser = async (req: any, res: any) => {
	const userId = req.user
	if (userId === null) {
		return res.sendStatus(401).json({ message: 'Unauthorized' })
	}

	const user = await prisma.user.findUnique({
		where: {
			id: userId,
		},
	})
	res.json(user)
}

export const deleteUser = async (req: Request, res: Response) => {
	const user = await prisma.user.delete({
		where: {
			id: req.body.id,
		},
	})
	res.json(user)
}
