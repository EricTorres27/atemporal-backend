"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _db = require("../db");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var User = {
  getAll: function getAll() {
    return _db.knex.select().table('usuarios').where('esta_activo', 1);
  },
  getOnebyId: function getOnebyId(id) {
    return _db.knex.select().table('usuarios').where('id_usuario', id).where('esta_activo', 1);
  },
  postOne: function postOne(data) {
    return (0, _db.knex)('usuarios').insert(data);
  },
  updateOne: function updateOne(id, data) {
    // data = {}
    return (0, _db.knex)('usuarios').where('id_usuario', id).update(data);
  },
  deleteOne: function deleteOne(id) {
    // data = {}
    return (0, _db.knex)('usuarios').where('id_usuario', id).update({
      esta_activo: false
    });
  },
  findByEmail: function findByEmail(email) {
    return _db.knex.select().table('usuarios').where('email', email).where('esta_activo', 1);
  },
  updateUserByField: function updateUserByField(id, field, data) {
    return (0, _db.knex)('usuarios').where('id_usuario', '=', id).where('esta_activo', 1).update(_defineProperty({}, field, data));
  }
};
exports.User = User;