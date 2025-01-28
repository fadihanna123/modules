import { PrismaClient } from '@prisma/client';
import { logger } from '@core/tools';
import { storeError, storeLog } from '@core/utils';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const prisma = new PrismaClient();

/**
 * Connect the database and check if it success.
 * @function connectDb
 * @async
 * @returns { Promise<void> } A promise
 * @example connectDb();
 */
const connectDb = async (): Promise<void> => {
  try {
    await prisma.$connect();
    logger.info('Database is connnected');
    storeLog('Database is connnected');
  } catch (error) {
    logger.error('Database has error', error);
    storeError('Database has error', error);
  }
};

export { connectDb, prisma };
