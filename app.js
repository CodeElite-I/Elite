import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './src/routes/homeRoutes';
import usuarioRoutes from './src/routes/usuarioRoutes';
import logRoutes from './src/routes/logRoutes';
import servicoRoutes from './src/routes/servicoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

const listaSite = [
  'http://localhost:3000',
];

const cosrOptions = {
  origin(origin, callback) {
    if (listaSite.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(cosrOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/usuarios/', usuarioRoutes);
    this.app.use('/log/', logRoutes);
    this.app.use('/servicos/', servicoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
