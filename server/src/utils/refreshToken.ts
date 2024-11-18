import jwt from 'jsonwebtoken'
import { generateAccessToken } from './generateToken'

export const refreshToken = (req: any, res: any) => {
	const refreshToken = req.cookies.refreshToken
	if (!refreshToken) return res.sendStatus(401).json({ message: 'No token provided' })
		
	jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string, (err: any, user: any) => {
		if (err) return res.sendStatus(403).json({ message: 'Invalid token' })
		const accessToken = generateAccessToken({ id: user.id })
		res.json({ accessToken })
	})
}
