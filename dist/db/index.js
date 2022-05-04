"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.knex = void 0;

var _config = _interopRequireWildcard(require("../config"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DEV_CONFIG = {
  host: _config["default"].DATABASE.host,
  port: _config["default"].DATABASE.port,
  user: _config["default"].DATABASE.user,
  password: _config["default"].DATABASE.password,
  database: _config["default"].DATABASE.database
};
var PRODUCTION_CONFIG = {
  host: _config["default"].DATABASE.host,
  port: _config["default"].DATABASE.port,
  user: _config["default"].DATABASE.user,
  password: _config["default"].DATABASE.password,
  database: _config["default"].DATABASE.database,
  ssl: {
    ca: _fs["default"].readFileSync(_path["default"].join(__dirname, '/ca-certificate.crt'))
  }
};

var knex = require('knex')({
  client: 'mysql',
  connection: _config.MODE_CONFIG === 'PRODUCTION' ? PRODUCTION_CONFIG : DEV_CONFIG,
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
    },
    confirm: function confirm(message) {
      console.log(message);
    }
  }
});

exports.knex = knex;