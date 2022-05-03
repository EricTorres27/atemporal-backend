"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashUtil = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hashUtil = {
  compareHash: function compareHash(plainText, hash) {
    return _bcrypt["default"].compareSync(plainText, hash);
  },
  createHash: function createHash(plainText) {
    return _bcrypt["default"].hashSync(plainText, 10);
  }
};
exports.hashUtil = hashUtil;