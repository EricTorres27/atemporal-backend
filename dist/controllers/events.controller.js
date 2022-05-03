"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventController = void 0;

var _Event = require("../models/Event");

var _Ticket = require("../models/Ticket");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var eventController = {
  getAll: function () {
    var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var events;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _Event.Event.getAll();

            case 3:
              events = _context.sent;
              res.status(200).json(events);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              res.status(500).json({
                msg: 'error getting all events'
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
      var event;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _Event.Event.getOne(req.params.id);

            case 3:
              event = _context2.sent;

              if (event[0]) {
                res.json(event[0]);
              } else {
                res.status(400).json({
                  msg: 'event does not exist'
                });
              }

              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              res.status(500).json({
                msg: 'error getting event'
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
      var respE, respT;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              console.log(req.body.event);
              _context3.next = 4;
              return _Event.Event.postOne(req.body.event);

            case 4:
              respE = _context3.sent;
              console.log(req.body.ticket);
              _context3.next = 8;
              return _Ticket.Ticket.postOne(req.body.ticket);

            case 8:
              respT = _context3.sent;
              return _context3.abrupt("return", res.status(200).json(respE[0]));

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
              return _context3.abrupt("return", res.status(500).json({
                msg: 'error'
              }));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
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
              return _Event.Event.updateOne(req.params.id, req.body);

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
              return _context4.abrupt("return", res.status(500).json({
                msg: 'error'
              }));

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
              return _Event.Event.deleteOne(req.params.id);

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
  }(),
  registerEvent: function () {
    var _registerEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
      var event, _yield$Event$postOne, _yield$Event$postOne2, idEventCreated, ticket, _yield$Ticket$postOne, _yield$Ticket$postOne2, idTicketCreated, _yield$Ticket$postOne3, _yield$Ticket$postOne4, idRelation;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              console.log(req.body);
              event = req.body.event;
              _context6.next = 5;
              return _Event.Event.postOne(event);

            case 5:
              _yield$Event$postOne = _context6.sent;
              _yield$Event$postOne2 = _slicedToArray(_yield$Event$postOne, 1);
              idEventCreated = _yield$Event$postOne2[0];
              console.log(idEventCreated);
              console.log(req.body.event);
              ticket = req.body.ticket;
              _context6.next = 13;
              return _Ticket.Ticket.postOne(ticket);

            case 13:
              _yield$Ticket$postOne = _context6.sent;
              _yield$Ticket$postOne2 = _slicedToArray(_yield$Ticket$postOne, 1);
              idTicketCreated = _yield$Ticket$postOne2[0];
              console.log(idTicketCreated);
              _context6.next = 19;
              return _Ticket.Ticket.postOneRelation(idEventCreated, idTicketCreated);

            case 19:
              _yield$Ticket$postOne3 = _context6.sent;
              _yield$Ticket$postOne4 = _slicedToArray(_yield$Ticket$postOne3, 1);
              idRelation = _yield$Ticket$postOne4[0];
              res.status(201).json({
                msg: 'Event created successfully with id: ' + idEventCreated + ' , ticket id: ' + idTicketCreated + ' and relation id: ' + idRelation
              });
              _context6.next = 29;
              break;

            case 25:
              _context6.prev = 25;
              _context6.t0 = _context6["catch"](0);
              console.error(_context6.t0);
              res.status(500).json({
                msg: 'error registering event or ticket'
              });

            case 29:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 25]]);
    }));

    function registerEvent(_x11, _x12) {
      return _registerEvent.apply(this, arguments);
    }

    return registerEvent;
  }()
};
exports.eventController = eventController;