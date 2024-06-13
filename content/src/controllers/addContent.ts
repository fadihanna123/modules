import { prisma } from 'db';
import { Response } from 'express';
import { logger } from 'tools';
import { apiKey, authorizationKey } from 'utils';
import { storeError } from 'utils/storeError';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Add a contentitem.
 * @function addContent
 * @async
 * @route POST /content/add
 * @param { TypedRequestBody<IFood> } req - Request
 * @param { Response } res - Response
 * @returns { Promise<void> } Promise.
 */
export const addContent = async (
  req: TypedRequest<Content>,
  res: Response
): Promise<void> => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    try {
      const addedItem = await prisma.content.create({
        data: req.body,
      });

      res.json(addedItem);
    } catch (err) {
      storeError((err as Error).message, 'POST', '/content/add');
      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'POST', '/content/add');

    logger.error('No headers provided POST /content/add!');

    res.json({ message: 'FORBIDDEN' });
  }
};
