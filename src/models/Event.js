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
    return knex('usuarios_eventos_crean').insert({ id_usuario: idUsuario, id_evento: idEvento })
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
    return knex('eventos').where('id_evento', id).update({ esta_activo: false })
  },
  getEventsByCategory: (id) => {
    console.log(id)
    return knex.select().from('eventos').innerJoin('eventos_categorias', 'eventos.id_evento', 'eventos_categorias.id_evento').where('eventos_categorias.id_categoria', id)
    /* SELECT * FROM eventos e INNER JOIN eventos_categorias ec ON e.id_evento = ec.id_evento  WHERE ec.id_categoria = 4; */
  },
  getEventsByTextSearch: (textToFind) => {
    // console.log(textToFind)
    return knex.select().from('eventos').where('nombre_evento', 'like', `%${textToFind}%`).orWhere('nombre_organizador', 'like', `%${textToFind}%`)
    /* SELECT * FROM eventos e INNER JOIN eventos_categorias ec ON e.id_evento = ec.id_evento  WHERE ec.id_categoria = 4; */
  }
}

module.exports = { Event }
