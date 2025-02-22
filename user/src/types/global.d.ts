import { Request } from 'express';

declare global {
  namespace NodeJS {
    /**
     * ProcessEnv
     * @param { number } DEV_PORT
     * @param { number } PROD_PORT
     * @param { string } DB_USERNAME
     * @param { string } DB_PASSWORD
     * @param { string } DB_HOST
     * @param { string } DB_PORT
     * @param { string } DB_NAME
     * @param { string } DATABASE_URL
     * @param { 'development' | 'production' | 'test' } NODE_ENV
     * @param { string } Token
     */
    interface ProcessEnv {
      DEV_PORT: number;
      PROD_PORT: number;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_HOST: string | number;
      DB_PORT: number;
      DB_NAME: string;
      DATABASE_URL: string;
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
   * @param { string } uname
   * @param { string } email
   * @param { string } psw
   * @param { string } repsw
   * @param { string } mobnr
   * @param { number } locked
   * @param { Buffer } img
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

  type Routes = '/register' | '/users';
}

export {};
