"use strict";

var _db = require("../db");

var Category = {
  getAll: function getAll() {
    return _db.knex.select().table('categorias').where('esta_activo', 1);
  },
  getOnebyId: function getOnebyId(id) {
    return _db.knex.select().table('categorias').where('id_categoria', id).where('esta_activo', 1);
  },
  postOne: function postOne(data) {
    return (0, _db.knex)('categorias').insert(data);
  },
  updateOne: function updateOne(id, data) {
    // data = {}
    return (0, _db.knex)('categorias').where('id_categoria', id).update(data);
  },
  deleteOne: function deleteOne(id) {
    // data = {}
    return (0, _db.knex)('categorias').where('id_categoria', id).update({
      esta_activo: false
    });
  }
};
module.exports = {
  Category: Category
};