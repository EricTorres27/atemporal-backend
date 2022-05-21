import { knex } from '../db'

export const User = {
  getAll: () => {
    return knex
      .select()
      .table('usuarios')
      .where('typeUser', 'admin')
      .where('esta_activo', 1)
  },
  getOneById: (id) => {
    return knex
      .select()
      .table('usuarios')
      .where('id_usuario', id)
      .where('esta_activo', 1)
  },
  getOne: (id) => {
    console.log('HEY 😅')
    return knex
      .select('nombre', 'email', 'celular')
      .table('usuarios')
      .where('id_usuario', id)
      .where('esta_activo', 1)
  },
  postOne: (data) => {
    return knex('usuarios').insert(data)
  },
  updateOne: (id, data) => { // data = {}
    return knex('usuarios').where('id_usuario', id).update(data)
  },
  deleteOne: (id) => { // data = {}
    return knex('usuarios').where('id_usuario', id).delete()
  },
  findByEmail: (email) => {
    return knex.select()
      .table('usuarios')
      .where('email', email)
      .where('esta_activo', 1)
  },
  updateUserByField: (id, field, data) => {
    return knex('usuarios')
      .where('id_usuario', '=', id)
      .where('esta_activo', 1)
      .update({
        [field]: data
      })
  }
}
