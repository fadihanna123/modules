import type {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';
import { logger } from '../tools';

/**
 * Handle server errors.
 * @param error
 * @param _req
 * @param res
 * @returns ErrorRequestHandler.
 */

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error) {
    logger.error('Unhandled error', { error: error.message });
    res.status(500).json({ error: 'Server error.' });
    next();
  }

  res.end();
};
