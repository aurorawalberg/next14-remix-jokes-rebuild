import React from 'react';
import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Nesting',
};

export default function NestingPage() {
  console.log('OUTER SERVER: this should only be printed on the server');

  return (
    <div className=" flex flex-col gap-y-10 xl:w-1/3">
      <h4>Server components in client components</h4>
      Server components can be rendered inside client components if they are slotted as a prop.
      <div className=" bg-yellow p-5 text-purple">
        Server component
        <ClientComponent>
          <ServerComponent />
        </ClientComponent>
      </div>
    </div>
  );
}
