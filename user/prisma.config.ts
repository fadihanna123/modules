import { PrismaConfig } from 'prisma/config';
import 'dotenv/config';
import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? './.docker.env' : './.env',
});

export default {
  schema: './src/prisma/schema.prisma',
} satisfies PrismaConfig;
