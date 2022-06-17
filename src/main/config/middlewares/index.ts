import type { Express } from 'express';

import { setupCors } from './cors';

export function setupMiddlewares(app: Express) {
  setupCors(app);
}
