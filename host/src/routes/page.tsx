import React from "react";

import { kit, loadRemote } from "@module-federation/modern-js/runtime";

const RemoteHome = kit.createRemoteSSRComponent({
  loader: () => loadRemote("remote/Home"),
  loading: <div>loading...</div>,
  fallback: ({ error }: { error: Error }) => {
    if (error instanceof Error && error.message.includes("not exist")) {
      return <div>fallback - not existed id</div>;
    }
    return <div>fallback</div>;
  },
});

const Index = () => {
  return (
    <div>
      <h1>Host</h1>
      <RemoteHome />
    </div>
  );
};

export default Index;
