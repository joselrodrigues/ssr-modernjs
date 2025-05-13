import { createModuleFederationConfig } from "@module-federation/modern-js";

export default createModuleFederationConfig({
  name: "host",
  manifest: {
    filePath: "static",
  },
  getPublicPath: '',
  filename: "static/remoteEntry.js",
  remotes: {
    remote: "remote@http://localhost:3052/static/mf-manifest.json",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.3.1" },
    "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
  },
});
