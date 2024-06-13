const {
  DEV_PORT,
  PROD_PORT,
  ALLOWEDOMAINS,
  APIKEY,
  AUTHORIZATION,
  USE_CORS,
  NODE_ENV,
} = process.env;

export const serverPort =
  NODE_ENV === 'development'
    ? DEV_PORT
    : NODE_ENV === 'production'
      ? PROD_PORT
      : undefined;

export const allowedDomains = ALLOWEDOMAINS;

export const apiKey = APIKEY;

export const authorizationKey = AUTHORIZATION;

export const allowedURLs = ALLOWEDOMAINS;

export const isCors = USE_CORS;
