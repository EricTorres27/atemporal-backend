/* eslint-disable camelcase */
import { knex } from '../db'

const Event = {
  getAll: ({ esta_activo }) => {
    console.log(esta_activo, '🐱‍🏍')
    return knex.select().table('eventos').where({ esta_activo })
  },
  getOne: (id) => {
    return knex.select().table('eventos').where('id_evento', id).where('esta_activo', 1)
  },
  postOne: (data) => {
    return knex('eventos').insert(data)
  },
  registerEventCreation: (idUsuario, idEvento) => {
    return knex('usuarios_eventos_crean').insert({id_usuario: idUsuario, id_evento: idEvento})
  },
  registerAttendee: (data) => {
    return knex('usuarios_eventos_reservan').insert(data)
  },
  unregisterAttendee: (idUsuario) => {
    return knex('usuarios_eventos_reservan').where('id_usuario', idUsuario).update({ esta_activo: false })
  },
  updateOne: (id, data) => { // data = {}
    return knex('eventos').where('id_evento', id).update(data)
  },
  deleteOne: (id) => { // data = {}
    return knex('evento').where('id_evento', id).update({ esta_activo: false })
  }
}

module.exports = { Event }
