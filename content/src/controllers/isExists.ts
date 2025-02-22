import { prisma } from '../db';

const isExists = async (id: number) => {
  const isExists = await prisma.content.findUnique({ where: { id } });
  return isExists;
};

export default isExists;
