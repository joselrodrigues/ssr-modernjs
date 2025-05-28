import { appTools, defineConfig } from "@modern-js/app-tools";
import { moduleFederationPlugin } from "@module-federation/modern-js";

const isLocal = process.env.IS_LOCAL === "true";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  server: {
    ssr: {
      mode: "stream",
      disablePrerender: true,
    },
    port: 3052,
  },
  output: {
    assetPrefix: "http://localhost:3052",
  },
  plugins: [
    appTools({
      bundler: "rspack",
    }),
    moduleFederationPlugin(),
  ],
});
