import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Usuario from '../models/Usuario';
import Servico from '../models/Servico';

const models = [Usuario, Servico];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
