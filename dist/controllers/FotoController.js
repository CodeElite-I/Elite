"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto');

class FotoController {
  create(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const usuario = await _Usuario2.default.findByPk(req.usuarioId);

        const foto = await _Foto2.default.create({ originalname, filename, usuario_id: usuario.id });

        return res.status(201).json(foto);
      } catch (e) {
        return res.status(400).json({ errors: [e.mesage] });
      }
    });
  }
}

exports. default = new FotoController();
