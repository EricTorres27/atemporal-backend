import { knex } from '../db'

const PaymentMeth = {
  getAll: () => {
    return knex.select().table('metodos_pago').where('esta_activo', 1)
  },
  getOnebyId: (id) => {
    return knex.select().table('metodos_pago').where('id_metodo', id).where('esta_activo', 1)
  },
  postOne: (data) => {
    return knex('metodos_pago').insert(data)
  },
  updateOne: (id, data) => { // data = {}
    return knex('metodos_pago').where('id_metodo', id).update(data)
  },
  deleteOne: (id) => { // data = {}
    return knex('metodos_pago').where('id_metodo', id).update({ esta_activo: false })
  }
}

module.exports = { PaymentMeth }
