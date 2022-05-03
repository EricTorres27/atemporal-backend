"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;

var _User = require("../models/User");

var _hash = require("../utils/hash");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var userController = {
  getAll: function () {
    var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var users;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _User.User.getAll();

            case 3:
              users = _context.sent;
              res.status(200).json(users);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              res.status(500).json({
                msg: 'Error al extraer los usuarios'
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function getAll(_x, _x2) {
      return _getAll.apply(this, arguments);
    }

    return getAll;
  }(),
  getOne: function () {
    var _getOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var user;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _User.User.getOnebyId(req.params.id);

            case 3:
              user = _context2.sent;

              if (user[0]) {
                res.json(user[0]);
              } else {
                res.status(400).json({
                  msg: 'user does not exist'
                });
              }

              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              res.status(500).json({
                msg: 'error getting user'
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    function getOne(_x3, _x4) {
      return _getOne.apply(this, arguments);
    }

    return getOne;
  }(),
  postOneAdmin: function () {
    var _postOneAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var resp;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              console.log(req.body);
              _context3.next = 4;
              return _User.User.postOne(req.body);

            case 4:
              resp = _context3.sent;
              res.status(201).json(resp[0]);
              _context3.next = 12;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
              res.json({
                msg: 'error post admin'
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    function postOneAdmin(_x5, _x6) {
      return _postOneAdmin.apply(this, arguments);
    }

    return postOneAdmin;
  }(),
  updateOne: function () {
    var _updateOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
      var resp;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              console.log(req.body);
              _context4.next = 4;
              return _User.User.updateOne(req.params.id, req.body);

            case 4:
              resp = _context4.sent;
              res.json({
                rows_affected: resp
              });
              _context4.next = 12;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);
              res.json({
                msg: 'error'
              });

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));

    function updateOne(_x7, _x8) {
      return _updateOne.apply(this, arguments);
    }

    return updateOne;
  }(),
  deleteOne: function () {
    var _deleteOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
      var resp;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _User.User.deleteOne(req.params.id);

            case 3:
              resp = _context5.sent;
              res.json({
                rows_affected: resp
              });
              _context5.next = 11;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);
              res.status(500).json({
                msg: 'Error al borrar el usuario'
              });

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));

    function deleteOne(_x9, _x10) {
      return _deleteOne.apply(this, arguments);
    }

    return deleteOne;
  }(),
  whoIam: function () {
    var _whoIam = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
      var _yield$User$getOnebyI, _yield$User$getOnebyI2, user;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              console.log(req.body.id);
              _context6.next = 4;
              return _User.User.getOnebyId(req.body.id);

            case 4:
              _yield$User$getOnebyI = _context6.sent;
              _yield$User$getOnebyI2 = _slicedToArray(_yield$User$getOnebyI, 1);
              user = _yield$User$getOnebyI2[0];
              res.status(200).json(user);
              _context6.next = 13;
              break;

            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](0);
              res.status(500).json({
                msg: 'Error al consultar el usuario'
              });

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 10]]);
    }));

    function whoIam(_x11, _x12) {
      return _whoIam.apply(this, arguments);
    }

    return whoIam;
  }(),
  recoverPassword: function () {
    var _recoverPassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
      var passwordHashed, updated;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _hash.hashUtil.createHash(req.body.password);

            case 3:
              passwordHashed = _context7.sent;
              _context7.next = 6;
              return _User.User.updateUserByField(req.body.id, 'password', passwordHashed);

            case 6:
              updated = _context7.sent;
              console.log(updated, '🤞');
              res.status(200).json({
                msg: 'Password actualizada'
              });
              _context7.next = 14;
              break;

            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](0);
              res.status(500).json({
                msg: 'Lo sentimos intentalo más tarde'
              });

            case 14:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 11]]);
    }));

    function recoverPassword(_x13, _x14) {
      return _recoverPassword.apply(this, arguments);
    }

    return recoverPassword;
  }()
};
exports.userController = userController;