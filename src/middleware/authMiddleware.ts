import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'mysecret';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] || '';
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
