import React, { Suspense } from 'react';

import {
  createRemoteSSRComponent,
  loadRemote,
} from '@module-federation/modern-js/runtime';

console.log('!!!!!!');
const RemoteButton = createRemoteSSRComponent({
  loader: () => loadRemote('remote/Button'),
  loading: <div>loading...</div>,
  fallback: ({ error }) => {
    console.log('error', error);
    if (error instanceof Error && error.message.includes('not exist')) {
      return <div>fallback - not existed id</div>;
    }
    return <div>fallback</div>;
  },
});

const Index = () => {
  return (
    <div>
      <RemoteButton />
    </div>
  );
};

export default Index;
