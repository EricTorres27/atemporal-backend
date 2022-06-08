import { knex } from '../db'

export const Category = {
  getAll: () => {
    return knex.select().table('categorias').where('esta_activo', 1)
  },
  getOnebyId: (id) => {
    return knex.select().table('categorias').where('id_categoria', id).where('esta_activo', 1)
  },
  postOne: (data) => {
    return knex('categorias').insert(data)
  },
  postEventCategory: (idCategory, idEvent) => {
    return knex('eventos_categorias').insert({ id_categoria: idCategory, id_evento: idEvent })
  },
  updateOne: (id, data) => { // data = {}
    return knex('categorias').where('id_categoria', id).update(data)
  },
  deleteOne: (id) => { // data = {}
    return knex('categorias').where('id_categoria', id).update({ esta_activo: false })
  },
  //* **************** */
  getCategoriesByEventId: (id) => {
    return knex.select().table('eventos_categorias').where('id_evento', id).where('esta_activo', 1)
  },
  getCategoryNameById: (id) => {
    return knex.select('nombre').table('categorias').where('id_categoria', id).where('esta_activo', 1)
  }
}
