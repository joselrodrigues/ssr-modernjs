import { defineServerConfig, type MiddlewareHandler } from '@modern-js/server-runtime';
import { staticServePlugin } from './static-plugin';

export const handler: MiddlewareHandler = async (c, next) => {;
  const start = Date.now();

  await next();

  const end = Date.now();
  console.log(end - start);
};

export default defineServerConfig({
  middlewares: [
    {
      name: 'request-timing',
      handler,
    },
  ],
  plugins: [staticServePlugin()],
});