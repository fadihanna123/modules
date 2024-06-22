const { DEV_PORT, ALLOWEDOMAINS, APIKEY, AUTHORIZATION, USE_CORS } =
  process.env;

export const serverPort = DEV_PORT;

export const allowedDomains = ALLOWEDOMAINS;

export const apiKey = APIKEY;

export const authorizationKey = AUTHORIZATION;

export const allowedURLs = ALLOWEDOMAINS;

export const isCors = USE_CORS;
