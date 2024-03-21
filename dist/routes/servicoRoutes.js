"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ServicoController = require('../controllers/ServicoController'); var _ServicoController2 = _interopRequireDefault(_ServicoController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = _express.Router.call(void 0, );

router
  .post('/', _loginRequired2.default, _ServicoController2.default.create)
  .get('/', _loginRequired2.default, _ServicoController2.default.findAll)
  .get('/:id', _loginRequired2.default, _ServicoController2.default.findById)
  .put('/:id', _loginRequired2.default, _ServicoController2.default.update)
  .delete('/:id', _loginRequired2.default, _ServicoController2.default.delete);

exports. default = router;
