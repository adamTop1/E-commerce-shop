import prisma from '../db'
import { Request, RequestHandler, Response } from 'express'

export interface IGetUserAuthInfoRequest extends Request {
	userId: string
}
export const getUser = async (req: any, res: any)=> {
	if (req.userId === null) return res.sendStatus(401).json({ message: 'Unauthorized' })
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: req.userId,
			},
		})
		return res.json(user)
	} catch (error) {
		return res.status(500).json({ message: 'Internal Server Error' })
	}
}

export const getUserById = async (req: Request, res: Response): Promise<any> => {
	if (req.body.id !== null) {
		const user = await prisma.user.findUnique({
			where: {
				id: req.body.id,
			},
		})
		return res.json(user)
	}
}

export const deleteUser = async (req: Request, res: Response) => {
	const user = await prisma.user.delete({
		where: {
			id: req.body.id,
		},
	})
	res.json(user)
}
