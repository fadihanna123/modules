const { ALLOWEDOMAINS, DEV_PORT, USE_CORS, Token } = process.env;

export const allowedURLs = ALLOWEDOMAINS;

export const port = DEV_PORT;

export const isCors = USE_CORS;

export const secretToken = Token;
