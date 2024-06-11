import { Request } from 'express';

declare global {
  namespace NodeJS {
    /**
     * ProcessEnv
     * @param { number } DEV_PORT
     * @param { number } PROD_PORT
     * @param { 'development' | 'production' | 'test' } NODE_ENV
     * @param { string } Token
     */
    interface ProcessEnv {
      DEV_PORT: number;
      PROD_PORT: number;
      NODE_ENV: 'development' | 'production' | 'test';
      Token: string;
    }
  }

  /**
   * UsrObjJwt
   * @param { string } uname
   */
  interface UsrObjJwt {
    username: string;
  }

  /**
   * IUsers
   * @param { string } [ id ] id
   * @param { string } username
   * @param { string } email
   * @param { string } psw
   */
  interface IUsers {
    id?: string;
    username: string;
    email: string;
    psw: string;
  }

  /**
   * typedRequestBody
   * @param { T } body
   */
  interface typedRequestBody<T> extends Request {
    body: T;
  }

  type Routes = '/login';
}

export {};
