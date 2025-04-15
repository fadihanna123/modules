import jwt from 'jsonwebtoken';
import { secretToken } from '../utils';
import { Response, NextFunction } from 'express';

const protectRoute = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    res.status(403).send('A token is required for authentication');
  }

  jwt.verify(token, secretToken, (err: any, user: any) => {
    if (err) return res.status(403).send('Invalid Token');

    req.user = user;
    next();
  });
};

export default protectRoute;
