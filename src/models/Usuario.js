import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        required: true,
      },
      cpf: {
        type: Sequelize.STRING,
        required: true,
      },
      cep: {
        type: Sequelize.STRING,
        required: true,
      },
      rua: {
        type: Sequelize.STRING,
        required: true,
      },
      numero: {
        type: Sequelize.INTEGER,
        required: true,
      },
      bairro: {
        type: Sequelize.STRING,
        required: true,
      },
      cidade: {
        type: Sequelize.STRING,
        required: true,
      },
      estado: {
        type: Sequelize.STRING,
        required: true,
      },
      email: {
        type: Sequelize.STRING,
        required: true,
      },
      senha_hash: {
        type: Sequelize.STRING,
        required: true,
      },
      senha: {
        type: Sequelize.VIRTUAL,
        required: true,
      },
      telefone: {
        type: Sequelize.STRING,
        required: true,
      },
      inativo: {
        type: Sequelize.INTEGER,
        defaultValue: '0',
      },
      excluido: {
        type: Sequelize.INTEGER,
        defaultValue: '0',
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senha) {
        usuario.senha_hash = await bcryptjs.hash(usuario.senha, 8);
      }
    });

    return this;
  }

  senhaIsValid(senha) {
    return bcryptjs.compare(senha, this.senha_hash);
  }
}
