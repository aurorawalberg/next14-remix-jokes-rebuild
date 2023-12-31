'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import type { JokeSchemaType } from '@/src/validations/jokeSchema';

export async function createJokeClientValidation(data: JokeSchemaType) {
  await prisma.joke.create({
    data,
  });
  revalidatePath('/demo/forms');
}
