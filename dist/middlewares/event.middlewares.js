"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCreateEvent = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _validator = require("../utils/validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Create event & ticket
var createEventSchema = _joi["default"].object({
  nombre_organizador: _joi["default"].string().min(5).max(50).required(),
  celular_organizador_principal: _joi["default"].string().min(10).max(10).required(),
  celular_organizador_secundario: _joi["default"].string().min(10).max(10).required(),
  nombre_evento: _joi["default"].string().min(5).max(50).required(),
  fecha_evento: _joi["default"].date().required(),
  hora_inicio: _joi["default"].string().min(2).max(20).required(),
  hora_final: _joi["default"].string().min(2).max(20).required(),
  ubicacion: _joi["default"].string().min(8).max(50).required(),
  descripcion: _joi["default"].string().min(10).max(500).required(),
  direccion: _joi["default"].string().min(10).max(500).required(),
  url_video: _joi["default"].string().min(10).max(500).required(),
  tipo_cobro: _joi["default"]["boolean"]().required(),
  foto_evento: _joi["default"].string().min(10).max(100).required(),
  archivo_itinerario: _joi["default"].string().min(10).max(500).required(),
  esta_activo: _joi["default"]["boolean"]()
});

var createTicketSchema = _joi["default"].object({
  nombre: _joi["default"].string().min(5).max(50).required(),
  cantidad: _joi["default"].number().integer(),
  esta_activo: _joi["default"]["boolean"]()
});

var validateCreateEvent = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var event, ticket, validationEvent, validationTicket;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event = req.body.event;
            ticket = req.body.ticket;
            _context.next = 4;
            return (0, _validator.validateSchema)(createEventSchema, event);

          case 4:
            validationEvent = _context.sent;
            _context.next = 7;
            return (0, _validator.validateSchema)(createTicketSchema, ticket);

          case 7:
            validationTicket = _context.sent;

            if (!validationEvent.err) {
              _context.next = 13;
              break;
            }

            res.status(400).json({
              msg: validationEvent.err
            });
            return _context.abrupt("return");

          case 13:
            if (!validationTicket.err) {
              _context.next = 16;
              break;
            }

            res.status(400).json({
              msg: validationTicket.err
            });
            return _context.abrupt("return");

          case 16:
            next();

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validateCreateEvent(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.validateCreateEvent = validateCreateEvent;