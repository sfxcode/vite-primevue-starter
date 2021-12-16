import type { UserModule } from '@/types';
import  { createLogger } from 'vue-logger-plugin';

const logger = createLogger({
  enabled: true,
  level: 'debug',
});

export const install: UserModule = ({ app, router, isClient }) => {
  app.use(logger);
};
