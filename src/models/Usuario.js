import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        required: true,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome precisar ter mais de 3 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        unique: {
          msg: 'Email já cadastrado',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      senha_hash: {
        type: Sequelize.STRING,
        required: true,
      },
      senha: {
        type: Sequelize.VIRTUAL,
        required: true,
        validate: {
          len: {
            args: [6, 100],
            msg: 'A senha precisa ter 6 ou mais caracteres',
          },
        },
      },
      inativo: {
        type: Sequelize.INTEGER,
        defaultValue: '0',
        enum: {
          values: ['0', '1'],
          msg: 'Digite 1 para inativo ou 0 para não',
        },
      },
      excluido: {
        type: Sequelize.INTEGER,
        defaultValue: '0',
        validate: {
          isInt: {
            msg: 'Digite 1 para excluido ou 0 para não',
          },
        },
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
