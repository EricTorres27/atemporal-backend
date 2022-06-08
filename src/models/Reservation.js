import { knex } from '../db'

export const Reservation = {
  getAll: () => {
    return knex
      .select()
      .table('usuarios_eventos_reservan')
      .where('esta_activo', 1)
  },
  getAllReservationsByUser: (id_usuario) => {
    return knex
      .select()
      .table('usuarios_eventos_reservan')
      .where('id_usuario', id_usuario)
      .where('esta_activo', 1)
  },
  getAllReservationsByEvent: (id_evento) => {
    return knex
      .select()
      .table('usuarios_eventos_reservan')
      .where('id_evento', id_evento)
      .where('esta_activo', 1)
  },
  registerReservation: (data) => {
    return knex('usuarios_eventos_reservan').insert(data)
  },
  updateReservation: (id, data) => { // data = {}
    return knex('usuarios_eventos_reservan')
      .where('id', id)
      .update(data)
  },
  deleteReservation: (id) => { // data = {}
    return knex('usuarios_eventos_reservan').where('id', id).update({ esta_activo: false })
  },
  getHashByIds: (id_evento, id_usuario) => {
    return knex.select('hash_qr').table('usuarios_eventos_reservan').where({ id_evento: id_evento }).where('id_usuario', id_usuario).where('esta_activo', 1)
  },
  getReservationByHash: (hash_qr) => {
    return knex.select().table('usuarios_eventos_reservan').where('hash_qr', hash_qr).where('esta_activo', 1)
  }
}
