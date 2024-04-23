import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Usuario from '../models/Usuario';
import Servico from '../models/Servico';
import Foto from '../models/Foto';
import Cliente from '../models/Cliente';

const models = [Usuario, Servico, Foto, Cliente];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
