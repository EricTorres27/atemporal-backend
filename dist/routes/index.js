"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initRoutes = void 0;

var _users = _interopRequireDefault(require("./users.routes"));

var _public = _interopRequireDefault(require("./public.routes"));

var _events = _interopRequireDefault(require("./events.routes"));

var _tickets = _interopRequireDefault(require("./tickets.routes"));

var _categories = _interopRequireDefault(require("./categories.routes"));

var _paymenthMeth = _interopRequireDefault(require("./paymenthMeth.routes"));

var _auth = require("../middlewares/auth.middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initRoutes = function initRoutes(app) {
  app.use('/', _public["default"]);
  app.use(_auth.authMiddleware.verifyToken);
  app.use('/api/usuarios', _users["default"]);
  app.use('/api/eventos', _events["default"]);
  app.use('/api/boletos', _tickets["default"]);
  app.use('/api/categorias', _categories["default"]);
  app.use('/api/metodos-pago', _paymenthMeth["default"]);
};

exports.initRoutes = initRoutes;