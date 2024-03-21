"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

 class Foto extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        required: true,
        validate: {
          notEmpty: {
            msg: 'Originalname não pode ser nulo',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        required: true,
        validate: {
          notEmpty: {
            msg: 'Filename não pode ser nulo',
          },
        },
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${_appConfig2.default.url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  }
} exports.default = Foto;
