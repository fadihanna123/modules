const { ALLOWEDOMAINS, DEV_PORT, USE_CORS } = process.env;

export const allowedURLs = ALLOWEDOMAINS;

export const port = DEV_PORT;

export const isCors = USE_CORS;
