import jwt from 'jsonwebtoken'

export const generateAccessToken = (id: { id: string}) => {
	return jwt.sign(id, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '15s' })
}

export const generateRefreshToken = (id: { id: string }) => {
	return jwt.sign(id, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '30d' })
}

