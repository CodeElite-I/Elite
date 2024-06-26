"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _expressdelay = require('express-delay'); var _expressdelay2 = _interopRequireDefault(_expressdelay);

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _usuarioRoutes = require('./routes/usuarioRoutes'); var _usuarioRoutes2 = _interopRequireDefault(_usuarioRoutes);
var _logRoutes = require('./routes/logRoutes'); var _logRoutes2 = _interopRequireDefault(_logRoutes);
var _servicoRoutes = require('./routes/servicoRoutes'); var _servicoRoutes2 = _interopRequireDefault(_servicoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

const listaSite = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://35.215.217.109',
  'https://elitetestelb.com',
];

const cosrOptions = {
  origin(origin, callback) {
    if (listaSite.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Não permitido pelo CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, cosrOptions));
    this.app.use(_helmet2.default.call(void 0, {
      crossOriginEmbedderPolicy: false,
    }));
    this.app.use(_expressdelay2.default.call(void 0, 1000));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/usuarios/', _usuarioRoutes2.default);
    this.app.use('/log/', _logRoutes2.default);
    this.app.use('/servicos/', _servicoRoutes2.default);
    this.app.use('/fotos/', _fotoRoutes2.default);
  }
}

exports. default = new App().app;
