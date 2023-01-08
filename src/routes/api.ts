import { Router } from 'express';

import { createHealthRoutes } from './health';

export function createRestRoutes() {
  const router = Router();

  router.use('/health', createHealthRoutes());

  return router;
}
