import { prisma } from '../db';
import type { Request, Response } from 'express';
import { logger } from '../tools';
import { apiKey, authorizationKey, storeError } from '../utils';

/**
 * Get all content items.
 * @route GET /content
 * @param { Request } req
 * @param { Response } res
 */

export const getContent = async (req: Request, res: Response) => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    const getList = await prisma.content.findMany();
    if (getList.length === 0) {
      storeError('No content exist.', 'GET', '/content');
      logger.error('No content exist.');
    }

    setTimeout(() => {
      res.json(getList);
    }, 2000);
  } else {
    storeError('No headers provided!', 'GET', '/content');
    logger.error('No headers provided on GET /content!');

    res.json({ message: 'FORBIDDEN' });
  }
};
