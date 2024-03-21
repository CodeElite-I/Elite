"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

class TokenController {
  async log(req, res) {
    const { email = '', senha = '' } = req.body;
    if (!email || !senha) {
      return res.status(401).json({
        errors: ['Por favor, preencha os campos corretamente!'],
      });
    }

    const usuario = await _Usuario2.default.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({
        errors: ['Usuário não existe!'],
      });
    }

    if ((!await usuario.senhaIsValid(senha))) {
      return res.status(401).json({
        errors: ['Senha incorreta!'],
      });
    }

    const { id } = usuario;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, usuario: { nome: usuario.nome, id, email } });
  }
}

exports. default = new TokenController();
