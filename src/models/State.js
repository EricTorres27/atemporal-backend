import { knex } from '../db'

export const State = {
  getAll: () => {
    return knex.select().table('estados').where('esta_activo', 1)
  },
  getOnebyId: (id) => {
    return knex.select().table('estados').where('id_estado', id).where('esta_activo', 1)
  },
  postEventState: (idState, idEvent) => {
    return knex('eventos_estados').insert({ id_estado: idState, id_evento: idEvent })
  }
}
