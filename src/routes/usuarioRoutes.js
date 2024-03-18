import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

import login from '../middlewares/loginRequired';

const router = new Router();

router
  .post('/', UsuarioController.create)
  .get('/', UsuarioController.findAll)
  .get('/:id', login, UsuarioController.findById)
  .put('/:id', login, UsuarioController.update)
  .delete('/:id', login, UsuarioController.delete);

export default router;
