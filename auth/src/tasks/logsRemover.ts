import { fileCleaner } from './fileClenaer';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Clean log and error data in the database and call fileCleaner.
 * @function logsRemover
 * @async
 * @returns { Promise<void> }
 * @example logsRemover();
 */
export const logsRemover = async (): Promise<void> => fileCleaner();
