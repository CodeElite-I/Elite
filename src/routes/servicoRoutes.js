import { Router } from 'express';
import ServicoController from '../controllers/ServicoController';

const router = Router();

router
  .post('/', ServicoController.create)
  .get('/', ServicoController.findAll)
  .get('/:id', ServicoController.findById)
  .put('/:id', ServicoController.update)
  .delete('/:id', ServicoController.delete);

export default router;
