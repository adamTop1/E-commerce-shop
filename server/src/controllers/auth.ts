import prisma from '../db'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { userRegistrationSchema } from '../utils/zodSchema'
import { generateAccessToken, generateRefreshToken } from '../utils/generateToken'


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

	if (user !== null) {
		isPasswordValid = await bcrypt.compare(req.body.password, user.password)
	}

	if (isPasswordValid && user) {
		const accessToken = generateAccessToken({ id: user.id })
		const refreshToken = generateRefreshToken({ id: user.id })

		res.cookie('refreshToken', refreshToken, { httpOnly: true })
		res.json({ accessToken })
	}
	
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
