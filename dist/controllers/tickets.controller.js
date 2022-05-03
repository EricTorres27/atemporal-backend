"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ticketController = void 0;

var _Ticket = require("../models/Ticket");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ticketController = {
  getAll: function () {
    var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var tickets;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _Ticket.Ticket.getAll();

            case 3:
              tickets = _context.sent;
              res.status(200).json(tickets);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              res.status(500).json({
                msg: 'error getting all tickets'
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
      var ticket;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _Ticket.Ticket.getOne(req.params.id);

            case 3:
              ticket = _context2.sent;

              if (ticket[0]) {
                res.status(200).json(ticket[0]);
              } else {
                res.status(400).json({
                  msg: 'ticket does not exist'
                });
              }

              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              res.status(500).json({
                msg: 'error getting ticket info.'
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
              console.log(req.body);
              _context3.next = 4;
              return _Ticket.Ticket.postOne(req.body);

            case 4:
              resp = _context3.sent;
              return _context3.abrupt("return", res.json(resp[0]));

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
              return _context3.abrupt("return", res.json({
                msg: 'error'
              }));

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
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
              console.log(req.body);
              _context4.next = 4;
              return _Ticket.Ticket.updateOne(req.params.id, req.body);

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
              return _Ticket.Ticket.deleteOne(req.params.id);

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
              res.json({
                msg: 'error'
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
exports.ticketController = ticketController;