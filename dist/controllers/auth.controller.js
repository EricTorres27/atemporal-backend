"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authController = void 0;

var _User = require("../models/User");

var _auth = require("../utils/auth");

var _hash = require("../utils/hash");

var _config = _interopRequireDefault(require("../config"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var authController = {
  registerAccount: function () {
    var _registerAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var account, passwordHashed, user, _yield$User$postOne, _yield$User$postOne2, idUserCreated, token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              // await Auth.deleteAll()
              console.log(req.body);
              _context.next = 4;
              return userAlreadyExist(req.body.email);

            case 4:
              account = _context.sent;

              if (!account) {
                _context.next = 8;
                break;
              }

              res.status(400).json({
                msg: 'Este correo ya esta asociado a otra cuenta'
              });
              return _context.abrupt("return");

            case 8:
              _context.next = 10;
              return _hash.hashUtil.createHash(req.body.password);

            case 10:
              passwordHashed = _context.sent;
              user = _objectSpread(_objectSpread({}, req.body), {}, {
                password: passwordHashed
              });
              _context.next = 14;
              return _User.User.postOne(user);

            case 14:
              _yield$User$postOne = _context.sent;
              _yield$User$postOne2 = _slicedToArray(_yield$User$postOne, 1);
              idUserCreated = _yield$User$postOne2[0];
              console.log(idUserCreated);
              token = _auth.authUtil.createTokenLogin({
                id: idUserCreated
              });
              res.status(201).json({
                token: token
              });
              _context.next = 26;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              res.status(500).json({
                msg: 'Error al crear la cuenta, intenta más tarde'
              });

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 22]]);
    }));

    function registerAccount(_x, _x2) {
      return _registerAccount.apply(this, arguments);
    }

    return registerAccount;
  }(),
  loginUser: function () {
    var _loginUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var _req$body, email, password, user, token;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              _context2.next = 4;
              return userAlreadyExist(email);

            case 4:
              user = _context2.sent;

              if (user) {
                _context2.next = 8;
                break;
              }

              res.status(400).json({
                msg: 'No existe una cuenta asociada a este correo'
              });
              return _context2.abrupt("return");

            case 8:
              if (_hash.hashUtil.compareHash(password, user.password)) {
                _context2.next = 11;
                break;
              }

              res.status(400).json({
                msg: 'Credenciales incorrectas'
              });
              return _context2.abrupt("return");

            case 11:
              token = _auth.authUtil.createTokenLogin({
                id: user.id_usuario
              });
              console.log(token);
              res.status(200).json({
                token: token
              });
              _context2.next = 20;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              res.status(500).json({
                msg: 'Error al ingresar, intentalo más tarde'
              });

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    function loginUser(_x3, _x4) {
      return _loginUser.apply(this, arguments);
    }

    return loginUser;
  }(),
  recoverPassword: function () {
    var _recoverPassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var email, user, token, response, transporter, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              email = req.body.email;
              _context3.next = 4;
              return userAlreadyExist(email);

            case 4:
              user = _context3.sent;

              if (user) {
                _context3.next = 8;
                break;
              }

              res.status(400).json({
                msg: 'No existe una cuenta asociada a este correo'
              });
              return _context3.abrupt("return");

            case 8:
              // 1 creamos token
              token = _auth.authUtil.createTokenRecoverPassword({
                id: user.id_usuario
              }, 5); // actualizar la db

              _context3.next = 11;
              return _User.User.updateUserByField(user.id_usuario, 'token_recover', token);

            case 11:
              response = _context3.sent;
              console.log(response, '😂'); // enviar email recover con el token
              // Create a SMTP transporter object

              transporter = _nodemailer["default"].createTransport(_config["default"].SMTP_CREDENTIALS); // Message object

              message = {
                from: 'noreplay@atemporal.art',
                to: "".concat(email),
                subject: 'Reestablece tu contraseña ✔',
                text: 'Atemporal, la mejor plataforma de eventos',
                html: "\n        <p>Da clic en el enlace para reestablecer tu constrase\xF1a, este enlace caduca en 5 minutos</p>\n        <a href=\"http://localhost:3000/cambiar-password/".concat(token, "\">Clic aqui para reestablecer tu contrase\xF1a</a>\n        ")
              };
              transporter.sendMail(message, function (err, info) {
                if (err) {
                  console.log('Error occurred. ' + err.message);
                  return process.exit(1);
                }

                console.log('Message sent: %s', info.messageId); // Preview only available when sending through an Ethereal account

                console.log('Preview URL: %s', _nodemailer["default"].getTestMessageUrl(info));
                res.status(200).json({
                  msg: 'Correo enviado'
                });
              });
              _context3.next = 22;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
              res.status(500).json({
                msg: 'Error al ingresar, intentalo más tarde'
              });

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 18]]);
    }));

    function recoverPassword(_x5, _x6) {
      return _recoverPassword.apply(this, arguments);
    }

    return recoverPassword;
  }()
};
exports.authController = authController;

var userAlreadyExist = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(email) {
    var userExist;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _User.User.findByEmail(email);

          case 2:
            userExist = _context4.sent;
            return _context4.abrupt("return", userExist[0] ? userExist[0] : null);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function userAlreadyExist(_x7) {
    return _ref.apply(this, arguments);
  };
}();