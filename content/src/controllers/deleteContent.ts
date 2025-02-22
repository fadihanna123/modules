import { prisma } from '../db';
import { Response } from 'express';
import { logger } from '../tools';
import { apiKey, authorizationKey, storeError, storeLog } from '../utils';
import isExists from './isExists';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Delete a food item.
 * @function deleteContent
 * @async
 * @route DELETE /content/:id
 * @param { TypedRequest<Content> } req - Request
 * @param { Response } res - Response
 * @returns { Promise<void> } Promise
 */
export const deleteContent = async (
  req: TypedRequest<Content>,
  res: Response
): Promise<void> => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    try {
      const id = Number(req.params['id']);
      if (!(await isExists(id))) {
        res.json({ warning: 'This post was not found!' });
      }

      await prisma.content.delete({ where: { id } });

      storeLog('Deleted', 'DELETE', `/content/${id}`);

      res.send({ message: `Post ${id} is deleted` });
    } catch (err) {
      storeError(
        (err as Error).message,
        'DELETE',
        `/content/${req.params['id']}`
      );

      logger.error((err as Error).message);
    }
  } else {
    storeError(
      'No headers provided!',
      'DELETE',
      `/content/${req.params['id']}`
    );

    logger.error('No headers provided on DELETE /content/:id!');

    res.json({ message: 'FORBIDDEN' });
  }
};
