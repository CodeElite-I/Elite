import Sequelize, { Model } from 'sequelize';

export default class Servico extends Model {
  static init(sequelize) {
    super.init({
      status: {
        type: Sequelize.ENUM('Aguardando', 'Iniciado', 'Finalizado'),
        defaultValue: 'Aguardando',
      },
      cliente: {
        type: Sequelize.STRING,
        required: true,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome do cliente precisar ter mais de 3 caracteres',
          },
        },
      },
      telefone: {
        type: Sequelize.STRING,
        required: true,
        validate: {
          is: {
            args: /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/,
            msg: 'Campo celular incorreto. Ex: (12)12345-1234',
          },
        },
      },
      desc_servico: {
        type: Sequelize.TEXT,
        required: true,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Preencha a descrição do serviço!',
          },
        },
      },
      observacao: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
    }, {
      sequelize,
    });

    return this;
  }
}
