"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.knex = void 0;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: _config["default"].DATABASE.host,
    port: _config["default"].DATABASE.port,
    user: _config["default"].DATABASE.user,
    password: _config["default"].DATABASE.password,
    database: _config["default"].DATABASE.database
  },
  pool: {
    min: 0,
    max: 7
  },
  log: {
    warn: function warn(message) {
      console.warn(message);
    },
    error: function error(message) {
      console.error(message);
    },
    deprecate: function deprecate(message) {
      console.warn(message);
    },
    debug: function debug(message) {
      console.info(message);
    }
  }
});

exports.knex = knex;