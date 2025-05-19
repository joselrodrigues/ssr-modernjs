import React, { Suspense } from 'react';

import {
  kit,
  loadRemote,
} from '@module-federation/modern-js/runtime';

console.log('!!!!!!');
const RemoteButton = kit.createRemoteSSRComponent({
  loader: () => loadRemote('remote/Button'),
  loading: <div>loading...</div>,
  fallback: ({ error }: { error: Error }) => {
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
