import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        required: true,
        validate: {
          notEmpty: {
            msg: 'Originalname não pode ser nulo',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        required: true,
        validate: {
          notEmpty: {
            msg: 'Filename não pode ser nulo',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
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
}
