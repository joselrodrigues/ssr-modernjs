import { createModuleFederationConfig } from "@module-federation/modern-js";

export default createModuleFederationConfig({
  name: "remote",
  manifest: {
    filePath: "static",
  },
  filename: "static/remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button/index.tsx",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.3.1" },
    "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
  },
});
