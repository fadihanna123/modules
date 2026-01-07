import fs from 'fs';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Clean log and error files.
 * @function fileCleaner
 * @returns { void }
 * @example fileClenaer();
 */
export const fileCleaner = (): void => {
  const logsPath: string = './src/logs/debug.log';
  const errorPath: string = './src/logs/error.log';
  const newValue: string = '';

  fs.promises
    .readFile(logsPath)
    .then(() => {
      fs.promises.writeFile(errorPath, newValue).catch((err) => {
        if (err) {
          throw err;
        }
      });
    })
    .catch((err: Error) => {
      if (err) {
        throw err;
      }
    });
};
