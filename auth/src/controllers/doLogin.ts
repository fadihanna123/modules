import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { secretToken } from '../utils';

/**
 * Do a login check.
 *
 * @function doLogin
 * @async
 * @access Public
 * @route POST /login
 * @param { typedRequestedBody<IUsers> } req
 * @param { Response } res
 * @example doLogin(req, res);
 */
export const doLogin = async (req: typedRequestBody<IUsers>, res: Response) => {
  const { username, psw } = req.body;

  const userObject: UsrObjJwt = {
    username,
    psw,
  };

  if (!username || !psw) {
    // If the user did not fill in all the boxes.
    res.json({ message: 'You must fill in all boxes!' });
  } else {
    // If the user filled in all the boxes.
    try {
      const accessToken = jwt.sign(userObject, secretToken!);
      res.json({ accessToken, author: username });
    } catch (err) {
      // If there is any error.
      res.status(500).send(err);
    }
  } // End if the user filled in all boxes.
};
