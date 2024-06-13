import type { Request } from 'express';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      PORT: number;
      ALLOWEDOMAINS: string;
      APIKEY: string;
      AUTHORIZATION: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }

  interface Content {
    id: number;
    title: string;
    desc: string;
  }

  interface TypedRequest<T> extends Request {
    body: T;
  }

  type Routes = '/content' | '/content/add' | '/content/:id';
}

export {};
