"use strict";

var _db = require("../db");

var Ticket = {
  getAll: function getAll() {
    return _db.knex.select().table('boletos').where('esta_activo', 1);
  },
  getOne: function getOne(id) {
    return _db.knex.select().table('boletos').where('id_boleto', id).where('esta_activo', 1);
  },
  postOne: function postOne(data) {
    return (0, _db.knex)('boletos').insert(data);
  },
  postOneRelation: function postOneRelation(idEvent, idTicket) {
    return (0, _db.knex)('eventos_boletos').insert({
      id_boleto: idTicket,
      id_evento: idEvent
    });
  },
  updateOne: function updateOne(id, data) {
    // data = {}
    return (0, _db.knex)('boletos').where('id_boleto', id).update(data);
  },
  deleteOne: function deleteOne(id) {
    // data = {}
    return (0, _db.knex)('boletos').where('id_boleto', id).update({
      esta_activo: false
    });
  }
};
module.exports = {
  Ticket: Ticket
};