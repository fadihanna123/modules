// @ts-check
import 'dotenv/config';
import '@core/tasks';

import registerRoutes from '@core/api/register';
import userRoutes from '@core/api/users';
import { listenFn } from '@core/controllers';
import express, { Application } from 'express';
import helmet from 'helmet';
import { logger } from '@core/tools';
import { errorHandler, storeLog, allowedURLs, isCors, port } from '@core/utils';
import { connectDb } from '@core/db';
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

  storeLog(`Method: ${req.method}, ${req.url}}`, req.method, req.url);

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
if (isCors) {
  server.use(cors(corsOptions));
}

// Restrict counts of requests.
server.use(rateLimit(limiter));
// Handle connection to database.
connectDb();
// Parse JSON bodies (as send by API clients) and add 1 kb limit to sending json.
server.use(express.json({ type: 'application/json', limit: '1kb' }));
// Parse URL-encoded bodies (as sent by HTML forms)
server.use(express.urlencoded({ extended: true }));
// Add security to the server.
server.use(helmet());
// Use register and users routes.
server.use('/api/auth/', registerRoutes);
server.use('/api/', userRoutes);
// Handle errors.
server.use(errorHandler);

// Start the server.
server.listen(port, listenFn);
