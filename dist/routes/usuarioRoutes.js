"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UsuarioController = require('../controllers/UsuarioController'); var _UsuarioController2 = _interopRequireDefault(_UsuarioController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _UsuarioPost = require('../middlewares/usuario/UsuarioPost'); var _UsuarioPost2 = _interopRequireDefault(_UsuarioPost);

const router = new (0, _express.Router)();

router
  .post('/', _UsuarioPost2.default, _UsuarioController2.default.create)
  .get('/', _UsuarioController2.default.findAll)
  .get('/:id', _loginRequired2.default, _UsuarioController2.default.findById)
  .put('/:id', _loginRequired2.default, _UsuarioController2.default.update)
  .delete('/:id', _loginRequired2.default, _UsuarioController2.default.delete);

exports. default = router;
