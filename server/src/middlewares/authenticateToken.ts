import { NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const authenticateToken = async (req: any, res: any, next: NextFunction): Promise<any> => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        req.userId = user.id;
        next();
    });
}

export default authenticateToken
