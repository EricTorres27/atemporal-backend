"use strict";

var _db = require("../db");

var Event = {
  getAll: function getAll() {
    return _db.knex.select().table('eventos').where('esta_activo', 1);
  },
  getOne: function getOne(id) {
    return _db.knex.select().table('eventos').where('id_evento', id).where('esta_activo', 1);
  },
  postOne: function postOne(data) {
    return (0, _db.knex)('eventos').insert(data);
  },
  updateOne: function updateOne(id, data) {
    // data = {}
    return (0, _db.knex)('eventos').where('id_evento', id).update(data);
  },
  deleteOne: function deleteOne(id) {
    // data = {}
    return (0, _db.knex)('evento').where('id_evento', id).update({
      esta_activo: false
    });
  }
};
module.exports = {
  Event: Event
};