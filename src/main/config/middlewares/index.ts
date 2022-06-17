import type { Express } from 'express';

import { setupBodyParser } from './bodyParser';
import { setupCors } from './cors';
import { setupHelmet } from './helmet';

export function setupMiddlewares(app: Express) {
  setupHelmet(app);
  setupBodyParser(app);
  setupCors(app);
}
