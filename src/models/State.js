import { knex } from '../db'

export const State = {
  getAll: () => {
    return knex.select().table('estados').where('esta_activo', 1)
  },
  getOnebyId: (id) => {
    return knex.select().table('estados').where('id_categoria', id).where('esta_activo', 1)
  }
}
