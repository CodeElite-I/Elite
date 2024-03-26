"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class UsuarioController {
  async create(req, res) {
    try {
      const novoUser = await _Usuario2.default.create(req.body);

      return res.status(201).json(novoUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async findAll(req, res) {
    try {
      const usuarios = await _Usuario2.default.findAll({
        attributes: ['id', 'nome', 'cpf', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado', 'email', 'telefone'],
        order: [['nome', 'ASC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'filename'],
        },
      });

      return res.status(200).json(usuarios);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const usuario = await _Usuario2.default.findByPk(id, {
        attributes: ['id', 'nome', 'cpf', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado', 'email', 'telefone'],
        order: [['nome', 'ASC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'filename'],
        },
      });
      if (!usuario) {
        return res.status(400).json({ errors: ['Usuário não encontrado!'] });
      }

      return res.status(200).json(usuario);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const usuario = await _Usuario2.default.findByPk(id);
      if (!usuario) {
        return res.status(400).json({ errors: ['Usuário não encontrado!'] });
      }
      const novoUser = await usuario.update(req.body);
      return res.status(200).json(novoUser);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const usuario = await _Usuario2.default.findByPk(id);
      if (!usuario) {
        return res.status(400).json({ errors: ['Usuário não encontrado!'] });
      }
      await usuario.destroy();
      return res.status(200).json({ message: ['Usuário foi deletado com sucesso!'] });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

exports. default = new UsuarioController();
