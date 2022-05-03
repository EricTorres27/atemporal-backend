"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Constantes
var PORT = 4000;
var app = (0, _express["default"])();
app.disable('etag'); // Middlewares

app.use((0, _cors["default"])()); // Una configuracion de seguridad entre headers

app.use(_express["default"].json()); // Parsea lo que llega al servidor en formato json

app.use((0, _morgan["default"])('dev')); // Muestra en consola la url, tiempo y status solicitado
// Iniciar rutas

(0, _routes.initRoutes)(app);
module.exports = {
  PORT: PORT,
  app: app
};