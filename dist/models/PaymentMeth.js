"use strict";

var _db = require("../db");

var PaymentMeth = {
  getAll: function getAll() {
    return _db.knex.select().table('metodos_pago').where('esta_activo', 1);
  },
  getOnebyId: function getOnebyId(id) {
    return _db.knex.select().table('metodos_pago').where('id_metodo', id).where('esta_activo', 1);
  },
  postOne: function postOne(data) {
    return (0, _db.knex)('metodos_pago').insert(data);
  },
  updateOne: function updateOne(id, data) {
    // data = {}
    return (0, _db.knex)('metodos_pago').where('id_metodo', id).update(data);
  },
  deleteOne: function deleteOne(id) {
    // data = {}
    return (0, _db.knex)('metodos_pago').where('id_metodo', id).update({
      esta_activo: false
    });
  }
};
module.exports = {
  PaymentMeth: PaymentMeth
};