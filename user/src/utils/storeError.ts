// @ts-check
import { prisma } from '@core/db';
import { DateTime } from 'luxon';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Store errors in the database
 * @function storeError
 * @async
 * @param { string } message
 * @param { string } method
 * @param { string } located
 * @returns { Promise<void> } A promise
 * @example storeError("Error connecting!", "POST", "/login");
 */
export const storeError = async (
  message: string,
  method?: string,
  located?: string
): Promise<void> => {
  const rnd: number = Math.floor(Math.random() * 1000);

  const time = DateTime.fromJSDate(new Date()).toFormat('yyyy-MM-dd HH:mm');

  await prisma.errors.create({
    data: {
      errorId: rnd,
      method: method ?? '/',
      message,
      located: located ?? '/',
      time,
    },
  });
};
