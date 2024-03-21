import Usuario from '../models/Usuario';
import Foto from '../models/Foto';

class UsuarioController {
  async create(req, res) {
    try {
      const novoUser = await Usuario.create(req.body);

      return res.status(201).json(novoUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async findAll(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ['id', 'nome', 'cpf', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado', 'email', 'telefone'],
        order: [['nome', 'ASC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      return res.status(200).json(usuarios);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id, {
        attributes: ['id', 'nome', 'cpf', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado', 'email', 'telefone'],
        order: [['nome', 'ASC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
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
      const usuario = await Usuario.findByPk(id);
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
      const usuario = await Usuario.findByPk(id);
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

export default new UsuarioController();
