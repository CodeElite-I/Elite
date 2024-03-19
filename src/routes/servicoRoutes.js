import { Router } from 'express';
import ServicoController from '../controllers/ServicoController';

import loginRequired from '../middlewares/loginRequired';

const router = Router();

router
  .post('/', loginRequired, ServicoController.create)
  .get('/', ServicoController.findAll)
  .get('/:id', ServicoController.findById)
  .put('/:id', ServicoController.update)
  .delete('/:id', ServicoController.delete);

export default router;
