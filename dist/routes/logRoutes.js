"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _LogController = require('../controllers/LogController'); var _LogController2 = _interopRequireDefault(_LogController);

const router = new (0, _express.Router)();

router.post('/', _LogController2.default.log);

exports. default = router;
