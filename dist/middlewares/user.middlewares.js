"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userMiddleware = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _validator = require("../utils/validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Validate create account
var createAccountSchema = _joi["default"].object({
  nombre: _joi["default"].string().min(2).max(30).required(),
  celular: _joi["default"].string().min(10).max(10).required(),
  email: _joi["default"].string().email().required(),
  password: _joi["default"].string().min(8).required(),
  typeUser: _joi["default"].string()
}); // Validate fields to login


var loginSchema = _joi["default"].object({
  email: _joi["default"].string().email().required(),
  password: _joi["default"].string().min(8).required()
}); // Validate an email


var emailSchema = _joi["default"].object({
  email: _joi["default"].string().email().required()
}); // Validate an email


var passwordSchema = _joi["default"].object({
  password: _joi["default"].string().min(8).required()
});

var userMiddleware = {
  validateCreateAccount: function () {
    var _validateCreateAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var body, validation;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = req.body;
              _context.next = 3;
              return (0, _validator.validateSchema)(createAccountSchema, body);

            case 3:
              validation = _context.sent;

              if (!validation.err) {
                _context.next = 8;
                break;
              }

              console.log(validation.err);
              res.status(400).json({
                msg: validation.err
              });
              return _context.abrupt("return");

            case 8:
              next();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function validateCreateAccount(_x, _x2, _x3) {
      return _validateCreateAccount.apply(this, arguments);
    }

    return validateCreateAccount;
  }(),
  validateLogin: function () {
    var _validateLogin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
      var body, validation;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              body = req.body;
              _context2.next = 3;
              return (0, _validator.validateSchema)(loginSchema, body);

            case 3:
              validation = _context2.sent;

              if (!validation.err) {
                _context2.next = 7;
                break;
              }

              res.status(400).json({
                msg: validation.err
              });
              return _context2.abrupt("return");

            case 7:
              next();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function validateLogin(_x4, _x5, _x6) {
      return _validateLogin.apply(this, arguments);
    }

    return validateLogin;
  }(),
  validateEmail: function () {
    var _validateEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
      var body, validation;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              body = req.body;
              _context3.next = 3;
              return (0, _validator.validateSchema)(emailSchema, body);

            case 3:
              validation = _context3.sent;

              if (!validation.err) {
                _context3.next = 7;
                break;
              }

              res.status(400).json({
                msg: validation.err
              });
              return _context3.abrupt("return");

            case 7:
              next();

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function validateEmail(_x7, _x8, _x9) {
      return _validateEmail.apply(this, arguments);
    }

    return validateEmail;
  }(),
  validatePassword: function () {
    var _validatePassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
      var body, validation;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              body = req.body;
              _context4.next = 3;
              return (0, _validator.validateSchema)(passwordSchema, body);

            case 3:
              validation = _context4.sent;

              if (!validation.err) {
                _context4.next = 7;
                break;
              }

              res.status(400).json({
                msg: validation.err
              });
              return _context4.abrupt("return");

            case 7:
              next();

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function validatePassword(_x10, _x11, _x12) {
      return _validatePassword.apply(this, arguments);
    }

    return validatePassword;
  }()
};
exports.userMiddleware = userMiddleware;