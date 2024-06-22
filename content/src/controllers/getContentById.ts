import { prisma } from '../db';
import type { Request, Response } from 'express';
import { logger } from '../tools';
import { apiKey, authorizationKey, storeError } from '../utils';

/**
 * Get content items by id.
 * @route GET /content/:id
 * @param { Request } req
 * @param { Response } res
 */

export const getContentById = async (req: Request, res: Response) => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    const id: number = Number(req.params['id']);
    const getItem = await prisma.content.findUnique({
      where: {
        id,
      },
    });

    if (getItem === null) {
      storeError('No item exists.', 'GET', '/content/:id');
      logger.error('No item exists.');
      res.json({ message: 'No item exists.' });
    }

    setTimeout(() => {
      res.json(getItem);
    }, 2000);
  } else {
    storeError('No headers provided!', 'GET', '/content/:id');
    logger.error('No headers provided on GET /content/:id!');

    res.json({ message: 'FORBIDDEN' });
  }
};
