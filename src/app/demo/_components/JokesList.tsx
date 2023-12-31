import Link from 'next/link';
import React from 'react';
import type { Joke } from '@prisma/client';

type Props = {
  jokes: Pick<Joke, 'id' | 'name'>[];
};

export default function JokesList({ jokes }: Props) {
  return (
    <ul>
      {jokes
        .sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        })
        .map((joke, key) => {
          return (
            <li key={key}>
              <Link prefetch href={`/jokes/${joke.id}`}>
                {joke.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
