import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';
import Usuario from '../models/Usuario';

const upload = multer(multerConfig).single('foto');

class FotoController {
  create(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      const { originalname, filename } = req.file;
      const usuario = await Usuario.findByPk(req.usuarioId);

      const foto = await Foto.create({ originalname, filename, usuario_id: usuario.id });

      return res.json(foto);
    });
  }
}

export default new FotoController();
