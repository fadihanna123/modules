import { logger } from '@core/tools';
import { port } from '@core/utils';
import { Logger } from 'winston';

/**
 * Listen to the server.
 *
 * @function listenFn
 * @access Public
 * @returns { void }
 * @example listenFn();
 */
export const listenFn = (): Logger =>
  logger.info(`Server started on port ${port}`);
