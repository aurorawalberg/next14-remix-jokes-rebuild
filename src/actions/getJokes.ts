import { prisma } from '@/db';

export async function getJokes() {
  return prisma.joke.findMany();
}
