import { prisma } from 'db';
import { Response } from 'express';

/**
 * Get all users.
 *
 * @function getUsers
 * @async
 * @route POST /users
 * @param { typedRequestedBody<IUsers> } req
 * @param { Response } res
 * @access Private
 * @example getUsers(req, res);
 */
// deepcode ignore NoRateLimitingForExpensiveWebOperation: The fix is already there in server.ts.
export const getUsers = async (
  req: typedRequestBody<IUsers>,
  res: Response
) => {
  const getList = await prisma.users.findMany();
  res.json(getList);
};
