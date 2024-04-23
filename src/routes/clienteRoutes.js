import { Router } from 'express';
import ClienteController from '../controllers/ClienteController';

import ClientePost from '../middlewares/cliente/ClientePost';
import ClientePut from '../middlewares/cliente/ClientePut';

const router = new Router();

router
  .post('/', ClientePost, ClienteController.create)
  .get('/', ClienteController.findAll)
  .get('/:id', ClienteController.findById)
  .put('/:id', ClientePut, ClienteController.update)
  .delete('/:id', ClienteController.delete);

export default router;
