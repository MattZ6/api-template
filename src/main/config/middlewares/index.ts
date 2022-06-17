import type { Express } from 'express';

import { setupBodyParser } from './bodyParser';
import { setupCors } from './cors';

export function setupMiddlewares(app: Express) {
  setupBodyParser(app);
  setupCors(app);
}
