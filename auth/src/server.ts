// @ts-check
import 'dotenv/config';
import '@core/tasks';

import { listenFn } from '@core/controllers';
import loginRoutes from './api/login';
import express, { Application } from 'express';
import helmet from 'helmet';
import { logger } from '@core/tools';
import { errorHandler, allowedURLs, isCors, port } from '@core/utils';
import cors, { CorsOptions } from 'cors';
import { rateLimit } from 'express-rate-limit';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

// deepcode ignore UseCsurfForExpress: CSurf package is deprecated.
const server: Application = express();

// Settings
const whiteList = allowedURLs?.split(', ');
const limiter = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
};

server.use((req, res, next) => {
  logger.info(`${req.method}, ${req.url}`);

  next();
});

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (whiteList?.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Use CORS.
isCors && server.use(cors(corsOptions));
// Restrict counts of requests.
server.use(rateLimit(limiter));
// Parse JSON bodies (as send by API clients) and add 1 kb limit to sending json.
server.use(express.json({ type: 'application/json', limit: '1kb' }));
// Parse URL-encoded bodies (as sent by HTML forms)
server.use(express.urlencoded({ extended: true }));
// Add security to the server.
server.use(helmet());
// Use Login routes.
server.use(loginRoutes);
// Handle if someone access unknown or not found route.
server.use((_, res) => res.send('This route does not exist!'));
// Handle errors.
server.use(errorHandler);

// Start the server.
server.listen(port, listenFn);
