import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { port } from '../utils';
import axios from 'axios';

/**
 * Do a login check.
 *
 * @function doLogin
 * @async
 * @access Public
 * @route POST /login
 * @param { typedRequestedBody<IUsers> } req
 * @param { Response } res
 * @returns { Promise<Response<any, Record<string, any>> | undefined> } Promise.
 * @example doLogin(req, res);
 */
export const doLogin = async (
  req: typedRequestBody<IUsers>,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  const { username, psw } = req.body;

  const userObject: UsrObjJwt = {
    username,
  };

  if (!username || !psw) {
    // If the user did not fill in all the boxes.
    res.json({ message: 'You must fill in all boxes!' });
  } else {
    // If the user filled in all the boxes.
    try {
      const { data } = await axios.post(`http://localhost:${port}/users`, {
        username,
        psw,
      });

      if (data.length === 0) {
        res.json({
          message: 'There is an error in your username/password.',
        });
      } else {
        // Return accesToken.
        const accessToken = jwt.sign(userObject, process.env['Token']!);
        res.json({ accessToken, author: username });
      }
    } catch (err) {
      // If there is any error.
      return res.status(500).send(err);
    }
  } // End if the user filled in all boxes.
};
