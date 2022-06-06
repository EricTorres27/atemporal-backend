import { knex } from '../db'

const Ticket = {
  getAll: () => {
    return knex.select().table('usuarios_eventos_reservan').where('esta_activo', 1)
  },
  getAllReservationsByUser: (id) => {
    return knex.select().table('usuarios_eventos_reservan').where('id_usuario', id).where('esta_activo', 1)
  },
  getAllReservationsByEvent: (id) => {
    return knex.select().table('usuarios_eventos_reservan').where('id_evento', id).where('esta_activo', 1)
  },
  postOne: (data) => {
    return knex('usuarios_eventos_reservan').insert(data)
  },
  updateOne: (id, data) => { // data = {}
    return knex('usuarios_eventos_reservan').where('id', id).update(data)
  },
  deleteOne: (id) => { // data = {}
    return knex('usuarios_eventos_reservan').where('id', id).update({ esta_activo: false })
  },
  verifyReservation: (id_evento, id_usuario) => {
    return knex.select().table('usuarios_eventos_reservan').where('id_evento', id_evento).where('id_usuario', id_usuario).where('esta_activo', 1)
  }
}

module.exports = { Ticket }
