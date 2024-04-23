import Cliente from '../models/Cliente';

class ClienteController {
  async create(req, res) {
    try {
      const email = await Cliente.findOne({ where: { email: req.body.email } });
      if (email) {
        return res.status(400).json({ errors: ['Este endereço de e-mail já está em uso.'] });
      }
      const novoCliente = await Cliente.create(req.body);

      return res.status(201).json(novoCliente);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async findAll(req, res) {
    try {
      const clientes = await Cliente.findAll();

      return res.status(200).json(clientes);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ errors: ['Cliente não encontrado!'] });
      }

      return res.status(200).json(cliente);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ errors: ['Cliente não encontrado!'] });
      }
      const novoCliente = await cliente.update(req.body);

      return res.status(200).json(novoCliente);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ errors: ['Cliente não encontrado!'] });
      }
      await cliente.destroy();
      return res.status(200).json({ message: ['Cliente foi deletado com sucesso!'] });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new ClienteController();
