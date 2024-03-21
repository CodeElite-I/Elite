import { Router } from 'express';

import fotoController from '../controllers/FotoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.create);

export default router;
