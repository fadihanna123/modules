import { logger } from '../tools';
import { port } from '../utils';

const { NODE_ENV } = process.env;

/**
 * Listen to the server.
 *
 * @function listenFn
 * @access Public
 * @returns { void }
 * @example listenFn();
 */
export const listenFn = () => {
  logger.info(`Server started on port ${port}`);
  NODE_ENV === 'production' && console.log(`Server started on port ${port}`);
};
