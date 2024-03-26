import { Router } from 'express';
import ServicoController from '../controllers/ServicoController';

import loginRequired from '../middlewares/loginRequired';

const router = Router();

router
  .post('/', loginRequired, ServicoController.create)
  .get('/', ServicoController.findAll)
  .get('/:id', loginRequired, ServicoController.findById)
  .put('/:id', loginRequired, ServicoController.update)
  .delete('/:id', loginRequired, ServicoController.delete);

export default router;
