"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authMiddleware = void 0;

var _User = require("../models/User");

var _auth = require("../utils/auth");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var authMiddleware = {
  verifyToken: function verifyToken(req, res, next) {
    try {
      var headers = req.headers,
          body = req.body;
      var _headers$authorizatio = headers.authorization,
          authorization = _headers$authorizatio === void 0 ? undefined : _headers$authorizatio;

      if (!authorization) {
        res.status(500).json({
          msg: 'missing token'
        });
        return;
      }

      var token = authorization.split(' ')[1];
      console.log(token, '😀');

      var decodedToken = _auth.authUtil.verifyToken(token);

      if (!decodedToken) {
        res.status(500).json({
          msg: 'invalid token'
        });
        return;
      }

      var id = decodedToken.id; // We add the id in body for the other middleware functions

      body.id = id; // Next middleware

      next();
    } catch (error) {
      console.log(error, '🙌');
      res.status(500).json({
        msg: 'Intentalo más tarde'
      });
    }
  },
  verifyTokenRecoverPassword: function () {
    var _verifyTokenRecoverPassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var headers, body, _headers$authorizatio2, authorization, token, decodedToken, id, _yield$User$getOnebyI, _yield$User$getOnebyI2, user;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              headers = req.headers, body = req.body;
              _headers$authorizatio2 = headers.authorization, authorization = _headers$authorizatio2 === void 0 ? undefined : _headers$authorizatio2;

              if (authorization) {
                _context.next = 6;
                break;
              }

              res.status(500).json({
                msg: 'Solicita de nuevo la recuperación'
              });
              return _context.abrupt("return");

            case 6:
              token = authorization.split(' ')[1];
              decodedToken = _auth.authUtil.verifyToken(token, 'recover-password');

              if (decodedToken) {
                _context.next = 11;
                break;
              }

              res.status(500).json({
                msg: 'Ups, enlace inválido'
              });
              return _context.abrupt("return");

            case 11:
              id = decodedToken.id;
              _context.next = 14;
              return _User.User.getOnebyId(id);

            case 14:
              _yield$User$getOnebyI = _context.sent;
              _yield$User$getOnebyI2 = _slicedToArray(_yield$User$getOnebyI, 1);
              user = _yield$User$getOnebyI2[0];

              if (!(user.token_recover !== token)) {
                _context.next = 20;
                break;
              }

              res.status(500).json({
                msg: 'Enlace inválido'
              });
              return _context.abrupt("return");

            case 20:
              _context.next = 22;
              return _User.User.updateUserByField(id, 'token_recover', null);

            case 22:
              body.id = id; // Next middleware

              next();
              _context.next = 30;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0, '🐱‍🐉 ERROR MIDDLEWARE');
              res.status(500).json({
                msg: 'Tiempo limite excedido'
              });

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 26]]);
    }));

    function verifyTokenRecoverPassword(_x, _x2, _x3) {
      return _verifyTokenRecoverPassword.apply(this, arguments);
    }

    return verifyTokenRecoverPassword;
  }()
};
exports.authMiddleware = authMiddleware;