import Sequelize, { Model } from 'sequelize';

export default class Cliente extends Model {
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

    return this;
  }
}
