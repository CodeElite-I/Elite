import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

import loginRequired from '../middlewares/loginRequired';
import UsuarioPost from '../middlewares/usuario/UsuarioPost';

const router = new Router();

router
  .post('/', UsuarioPost, UsuarioController.create)
  .get('/', UsuarioController.findAll)
  .get('/:id', loginRequired, UsuarioController.findById)
  .put('/:id', loginRequired, UsuarioController.update)
  .delete('/:id', loginRequired, UsuarioController.delete);

export default router;
