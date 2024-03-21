"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Servico = require('../models/Servico'); var _Servico2 = _interopRequireDefault(_Servico);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

class ServicoController {
  async create(req, res) {
    try {
      const usuario = await _Usuario2.default.findByPk(req.usuarioId);
      console.log(usuario.id);
      const novoServico = await _Servico2.default.create(
        { ...req.body, usuario_id: usuario.id },
      );

      return res.status(201).json(novoServico);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async findAll(req, res) {
    try {
      const servicos = await _Servico2.default.findAll();

      return res.status(200).json(servicos);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const servico = await _Servico2.default.findByPk(id);

      if (servico == null) {
        return res.status(404).json({ errors: ['Serviço não encontrado!'] });
      }

      return res.status(200).json(servico);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const servico = await _Servico2.default.findByPk(id);

      if (servico == null) {
        return res.status(404).json({ errors: ['Serviço não encontrado!'] });
      }

      const servicoAlterado = await servico.update(req.body);

      return res.status(200).json(servicoAlterado);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const servico = await _Servico2.default.findByPk(id);

      if (servico == null) {
        return res.status(404).json({ errors: ['Serviço não encontrado!'] });
      }

      await servico.destroy();
      return res.status(201).json({ message: ['Serviço foi deletado com sucesso!'] });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

exports. default = new ServicoController();
