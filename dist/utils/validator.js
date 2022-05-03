"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSchema = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var validateSchema = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(schema, body) {
    var data, errors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return schema.validateAsync(body, {
              abortEarly: false,
              errors: {
                wrap: {
                  label: false
                },
                stack: true
              },
              externals: false
            });

          case 3:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data,
              err: null
            });

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            errors = _context.t0.details.map(function (err) {
              return {
                type: err.message
              };
            });
            return _context.abrupt("return", {
              err: errors
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function validateSchema(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.validateSchema = validateSchema;