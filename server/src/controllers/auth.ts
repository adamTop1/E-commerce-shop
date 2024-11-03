import prisma from '../db'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { userRegistrationSchema } from '../utils/zodSchema'

export const createUser = async (req: Request, res: Response) => {
	const validate = userRegistrationSchema.parse(req.body)

	const hashedPassword = await bcrypt.hash(validate.password, 10)

	const user = await prisma.user.create({
		data: {
			email: req.body.email,
			password: hashedPassword,
		},
	})
	res.json(user)
}

export const loginUser = async (req: Request, res: Response) => {
	const user = await prisma.user.findUnique({
		where: {
			email: req.body.email,
		},
	})

	let isPasswordValid
	let token = null

	if (user !== null) {
		isPasswordValid = await bcrypt.compare(req.body.password, user.password)
	}

	if (isPasswordValid && user) {
		token = jwt.sign({ id: user.id }, process.env.SECRET as string)
		
	}

	res.status(200).json({ token })
}

export const getUser = async (req: Request, res: Response) => {
	const user = await prisma.user.findUnique({
		where: {
			id: req.body.id,
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
