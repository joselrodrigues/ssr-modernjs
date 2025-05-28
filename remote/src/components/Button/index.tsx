import { useAsyncValue } from "@modern-js/runtime/router";
import React from "react";

const RemoteText = () => {
  const data = useAsyncValue() as { banners: string[] };
  return (
    <div>
      <h1>Remote text</h1>
      <div>{data?.banners?.join(",")}</div>
    </div>
  );
};

export default RemoteText;
