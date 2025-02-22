import { prisma } from 'db';
import { Response } from 'express';
import { logger } from '@core/tools';
import { storeError, storeLog } from '@core/utils';
import validator from 'validator';

/**
 * Registration functionality.
 *
 * @function doRegister
 * @async
 * @route POST /register
 * @param { typedRequestedBody<IUsers> } req
 * @param { Response } res
 * @access Public
 * @example doRegister(req, res);
 */
// deepcode ignore NoRateLimitingForExpensiveWebOperation: The fix is already there in server.ts.
export const doRegister = async (
  req: typedRequestBody<IUsers>,
  res: Response
) => {
  const { username, email, psw } = req.body;

  if (!username || !email || !psw) {
    // If the user did not fill in all required fields.
    storeError('You must fill in all mandatory fields!', 'POST', '/register');
    res.json({
      message: 'You must fill in all mandatory fields!',
    });
  } else {
    // If the user filled in all required fields.
    if (!validator.isEmail(email)) {
      // If the email address is not written correctly.
      storeError('You must enter a valid email address!', 'POST', '/register');
      res.json({
        message: 'You must enter a valid email address!',
      });
    } else {
      // If the email address is written correctly.
      if (!validator.isLength(psw, { min: 8 })) {
        // Om lösenord och bekräfta lösenord fälten inte innehåller starka lösenord som har minst 8 tecken.
        storeError(
          'You must choose a password that is at least 8 characters long!',
          'POST',
          '/register'
        );

        res.json({
          message:
            'You must choose a password that is at least 8 characters long!',
        });
      } else {
        const findUser = await prisma.users.count({
          where: {
            username,
            email,
          },
        });

        if (findUser !== 0) {
          // If the user was found in the database.
          storeLog(
            'You are already registered with us. You can log in.',
            'POST',
            '/register'
          );

          res.json({
            message: 'You are already registered with us. You can log in.',
          });
        } else {
          // If the user was not found in the database.
          try {
            const userModel = await prisma.users.create({
              data: {
                username,
                email,
                psw,
              },
            });

            if (userModel) {
              storeLog(
                'Thank you for registration. \n Please login.',
                'POST',
                '/register'
              );
              res.send({
                message: 'Thank you for registration. \n Please login.',
              });
            }
          } catch (error) {
            storeError((error as Error).message, 'POST', '/register');
            logger.error('\x1b[31m', (error as Error).message);
          }
        } // End if the user was not found in the database.
      } // The End Password and Confirm Password fields contain strong passwords that are at least 8 characters long.
    } // Done if the email address is correctly written.
  } // End if the user filled in all required boxes.
};
