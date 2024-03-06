import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = new Router();

router
  .post('/', UsuarioController.create)
  .get('/', UsuarioController.findAll)
  .get('/:id', UsuarioController.findById)
  .put('/:id', UsuarioController.update)
  .delete('/:id', UsuarioController.delete);

export default router;
