// @ts-check
import { logger } from '@core/tools';

import { storeError } from './storeError';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Handle server errors.
 * @function errorHandler
 * @param { Error }  error
 * @returns { void }
 * @example errorHandler({ message: "ERROR" });
 */
export const errorHandler = (error: Error): void => {
  if (error) {
    logger.error({ error: JSON.stringify(error.message) });
    storeError(error.message, '', 'Server');
  }
};
