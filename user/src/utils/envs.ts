const { ALLOWEDOMAINS, NODE_ENV, DEV_PORT, PROD_PORT, USE_CORS } = process.env;

export const allowedURLs = ALLOWEDOMAINS;

export const port = NODE_ENV === 'development' ? DEV_PORT : PROD_PORT;

export const isCors = USE_CORS;
