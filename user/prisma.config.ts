import { PrismaConfig } from 'prisma/config';
import 'dotenv/config';

export default {
  schema: './src/prisma/schema.prisma',
} satisfies PrismaConfig;
