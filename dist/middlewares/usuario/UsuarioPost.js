"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _joi = require('joi'); var _joi2 = _interopRequireDefault(_joi);
var _joitranslationptbr = require('joi-translation-pt-br');
var _FormatTelefone = require('../../util/FormatTelefone'); var _FormatTelefone2 = _interopRequireDefault(_FormatTelefone);

exports. default = async (req, res, next) => {
  try {
    const userPost = _joi2.default.object({
      nome: _joi2.default.string().min(4).required(),
      cpf: _joi2.default.string().regex(_FormatTelefone2.default.call(void 0, )).required(),
      cep: _joi2.default.string().regex(/^\d{5}-\d{3}$/).required(),
      rua: _joi2.default.string().min(4).required(),
      numero: _joi2.default.number().min(1).required(),
      bairro: _joi2.default.string().min(4).required(),
      cidade: _joi2.default.string().min(4).required(),
      estado: _joi2.default.string().min(1).max(2).required(),
      email: _joi2.default.string().email().required(),
      senha: _joi2.default.string().min(6).required(),
      telefone: _joi2.default.string().regex(/(\d{2})(\d{5})(\d{4})/).required(),
    });
    const { error } = await userPost.validate(req.body, { abortEarly: true, messages: _joitranslationptbr.messages });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(error.status || 400).json({
      errors: [error.description || error.message],
    });
  }
};
