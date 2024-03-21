"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Servico extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      status: {
        type: _sequelize2.default.ENUM('Aguardando', 'Iniciado', 'Finalizado'),
        defaultValue: 'Aguardando',
      },
      telefone: {
        type: _sequelize2.default.STRING,
        required: true,
        validate: {
          is: {
            args: /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/,
            msg: 'Campo celular incorreto. Ex: (12)12345-1234',
          },
        },
      },
      desc_servico: {
        type: _sequelize2.default.TEXT,
        required: true,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Preencha a descrição do serviço!',
          },
        },
      },
      observacao: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  }
} exports.default = Servico;
