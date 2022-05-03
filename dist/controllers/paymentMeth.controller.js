"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paymentMethController = void 0;

var _PaymentMeth = require("../models/PaymentMeth");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var paymentMethController = {
  getAll: function () {
    var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var paymentMeth;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _PaymentMeth.PaymentMeth.getAll();

            case 3:
              paymentMeth = _context.sent;
              res.status(200).json(paymentMeth);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              // En caso de error se arroja el error a la consola y regresamos un estado 500
              console.log(_context.t0);
              res.status(500).json({
                msg: 'Error al extraer los metodos de pago'
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
      var paymentMeth;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _PaymentMeth.PaymentMeth.getOnebyId(req.params.id);

            case 3:
              paymentMeth = _context2.sent;

              if (paymentMeth[0]) {
                res.json(paymentMeth[0]);
              } else {
                res.status(400).json({
                  msg: 'Esta metodo de pago no existe'
                });
              }

              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              res.status(500).json({
                msg: 'Error al extraer el metodos de pago'
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
  postOne: function () {
    var _postOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var resp;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _PaymentMeth.PaymentMeth.postOne(req.body);

            case 3:
              resp = _context3.sent;
              res.status(201).json(resp[0]);
              _context3.next = 11;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
              res.status(500).json({
                msg: 'Error al publicar la categoria'
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    function postOne(_x5, _x6) {
      return _postOne.apply(this, arguments);
    }

    return postOne;
  }(),
  updateOne: function () {
    var _updateOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
      var resp;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _PaymentMeth.PaymentMeth.updateOne(req.params.id, req.body);

            case 3:
              resp = _context4.sent;

              if (resp) {
                res.status(202).json({
                  rows_affected: resp
                });
              } else {
                res.status(400).json({
                  msg: 'Esta categoria no existe'
                });
              }

              _context4.next = 11;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);
              res.status(500).json({
                msg: 'Error al actualizar la categoria'
              });

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
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
              return _PaymentMeth.PaymentMeth.deleteOne(req.params.id);

            case 3:
              resp = _context5.sent;

              if (resp) {
                res.status(202).json({
                  rows_affected: resp
                });
              } else {
                res.status(400).json({
                  msg: 'Esta categoria no existe'
                });
              }

              _context5.next = 11;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);
              res.status(500).json({
                msg: 'Error al borrar la categoria'
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
  }()
};
exports.paymentMethController = paymentMethController;