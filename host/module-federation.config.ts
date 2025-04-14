import { createModuleFederationConfig } from "@module-federation/modern-js";

const isDev = process.env.NODE_ENV === "development";
const producerUrl = isDev
  ? "http://localhost:3001"
  : "http://localhost:8080/remote";

export default createModuleFederationConfig({
  name: "host",
  manifest: {
    filePath: "static",
  },
  filename: "static/remoteEntry.js",
  remotes: {
    remote: `remote@${producerUrl}/static/mf-manifest.json`,
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.3.1" },
    "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
  },
});
