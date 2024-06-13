import { prisma } from 'db';
import { Response } from 'express';
import { logger } from 'tools';
import { apiKey, authorizationKey } from 'utils';
import { storeError } from 'utils/storeError';
import { storeLog } from 'utils/storeLog';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Update a content item by id.
 * @async
 * @function updateContent
 * @route PUT /content/:id
 * @param { TypedRequest<Content> } req - Request
 * @param { Response } res - Response
 * @returns { Promise<void> } Promise
 */
export const updateContent = async (
  req: TypedRequest<Content>,
  res: Response
): Promise<void> => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    try {
      const id = Number(req.params['id']);
      await prisma.content.update({ where: { id }, data: req.body });

      storeLog('Changed', 'PUT', `/content/${id}`);
      res.send({ message: 'Changed' });
    } catch (err) {
      storeError((err as Error).message, 'PUT', `/content/${req.params['id']}`);

      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'PUT', `/content/${req.params['id']}`);

    logger.error('No headers provided on PUT /content/:id!');

    res.json({ message: 'FORBIDDEN' });
  }
};
