import { createModuleFederationConfig } from "@module-federation/modern-js";

export default createModuleFederationConfig({
  name: "remote",
  manifest: {
    filePath: "static",
  },
  filename: "static/remoteEntry.js",
  exposes: {
    "./Home": "./src/routes/page.tsx",
    "./RemotePage": "./src/components/RemotePage/index.tsx",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.3.1" },
    "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
    "theme-ui": { singleton: true },
    "react-router-dom": {
      singleton: true,
    },
    "@emotion/react": { singleton: true },
    "@theme-ui/presets": { singleton: true },
  },
});
