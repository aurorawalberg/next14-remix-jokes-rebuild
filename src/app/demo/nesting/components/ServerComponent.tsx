import React from 'react';

export default function ServerComponent() {
  console.log('CHILD Server rendering: this should only be printed on the server');

  return <div className="m-5 bg-yellow p-5 text-purple">Server component</div>;
}
