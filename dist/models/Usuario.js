"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Usuario extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        required: true,
      },
      cpf: {
        type: _sequelize2.default.STRING,
        required: true,
      },
      cep: {
        type: _sequelize2.default.STRING,
        required: true,
      },
      rua: {
        type: _sequelize2.default.STRING,
        required: true,
      },
      numero: {
        type: _sequelize2.default.INTEGER,
        required: true,
      },
      bairro: {
        type: _sequelize2.default.STRING,
        required: true,
      },
      cidade: {
        type: _sequelize2.default.STRING,
        required: true,
      },
      estado: {
        type: _sequelize2.default.STRING,
        required: true,
      },
      email: {
        type: _sequelize2.default.STRING,
        required: true,
      },
      senha_hash: {
        type: _sequelize2.default.STRING,
        required: true,
      },
      senha: {
        type: _sequelize2.default.VIRTUAL,
        required: true,
      },
      telefone: {
        type: _sequelize2.default.STRING,
        required: true,
      },
      inativo: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '0',
      },
      excluido: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '0',
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senha) {
        usuario.senha_hash = await _bcryptjs2.default.hash(usuario.senha, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'usuario_id' });
  }

  senhaIsValid(senha) {
    return _bcryptjs2.default.compare(senha, this.senha_hash);
  }
} exports.default = Usuario;
