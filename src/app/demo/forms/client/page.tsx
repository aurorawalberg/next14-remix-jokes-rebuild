import React from 'react';
import JokesList from '@/src/components/JokesList';
import ClientForm from '../_components/ClientForm';

export default async function ClientPage() {
  return (
    <div className="flex flex-col gap-5 xl:w-1/3">
      <h4>Client-side validation</h4>
      Validation is happening on the client before calling the server, using Zod.
      <ClientForm />
      <JokesList />
    </div>
  );
}
