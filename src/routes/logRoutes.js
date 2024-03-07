import { Router } from 'express';
import logController from '../controllers/LogController';

const router = new Router();

router.post('/', logController.log);

export default router;
