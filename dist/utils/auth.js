"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authUtil = void 0;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var jwt = require('jsonwebtoken');

var authUtil = {
  createTokenLogin: function createTokenLogin(data) {
    var expiration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '6h';
    var token = jwt.sign(data, _config["default"].JWT_TOKEN.login, {
      expiresIn: expiration
    }); // this is temporal

    return token;
  },
  createTokenRecoverPassword: function createTokenRecoverPassword(data, expiration) {
    var token = jwt.sign(data, _config["default"].JWT_TOKEN.recover_password, {
      expiresIn: "".concat(expiration * 1000 * 60, "ms")
    }); // this is temporal

    return token;
  },
  verifyToken: function verifyToken(token) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'login';
    return type === 'login' ? jwt.verify(token, _config["default"].JWT_TOKEN.login) : jwt.verify(token, _config["default"].JWT_TOKEN.recover_password);
  }
};
exports.authUtil = authUtil;