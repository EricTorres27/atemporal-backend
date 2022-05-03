"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCreateCategory = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _validator = require("../utils/validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Create Category
var createCategorySchema = _joi["default"].object({
  nombre: _joi["default"].string().min(5).max(50).required(),
  esta_activo: _joi["default"]["boolean"]()
});

var validateCreateCategory = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var validationCategory;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _validator.validateSchema)(createCategorySchema, req.body);

          case 2:
            validationCategory = _context.sent;
            console.log(req.body);
            console.log(validationCategory.err);

            if (!validationCategory.err) {
              _context.next = 8;
              break;
            }

            res.status(400).json({
              msg: validationCategory.err
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

  return function validateCreateCategory(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.validateCreateCategory = validateCreateCategory;