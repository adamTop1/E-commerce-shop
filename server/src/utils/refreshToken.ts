import jwt from 'jsonwebtoken'
import app from '../server'
import { generateAccessToken } from './generateToken'

app.post('/token', (req: any,  res: any) => {
	const refreshToken = req.cookies.refreshToken
	if (!refreshToken) return res.sendStatus(401)

	jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string, (err: any, user: any) => {
		if (err) return res.sendStatus(403)

		const accessToken = generateAccessToken({ id: user.id })
		res.json({ accessToken })
	})
})
