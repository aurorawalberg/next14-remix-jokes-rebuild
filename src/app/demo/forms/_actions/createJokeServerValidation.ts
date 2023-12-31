'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { JokeSchema } from '@/src/validations/jokeSchema';

export async function createJokeServerValidation(data: FormData) {
  const newJoke = {
    content: data.get('content')?.valueOf(),
    name: data.get('name')?.valueOf(),
  };

  const result = JokeSchema.safeParse(newJoke);

  if (!result.success) {
    console.log('SERVER ERROR' + result.error.message);
    return;
  }

  await prisma.joke.create({
    data: result.data,
  });
  revalidatePath('/demo/forms');
}
