import Sequelize, { Model } from 'sequelize';

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
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  }
}
