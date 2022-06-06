import { knex } from '../db'

const Event = {
  getAll: ({ esta_activo, esta_aprobado }) => {
    console.log(esta_activo, '🐱‍🏍')
    console.log(esta_aprobado, '✅❓')
    return knex.select().table('eventos').where({ esta_activo }).where({ esta_aprobado })
  },
  getOne: (id) => {
    return knex.select().table('eventos').where('id_evento', id)
  },
  getOnePublic: (id) => {
    return knex.select().table('eventos').where('id_evento', id).where('esta_aprobado', 1).where('esta_activo', 1)
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
    return knex('eventos').where('id_evento', id).update({ esta_activo: false, esta_aprobado: false })
  },
  getEventsByCategory: (id) => {
    console.log(id)
    return knex.select().from('eventos').where('eventos.esta_activo', 1).where('eventos.esta_aprobado', 1).innerJoin('eventos_categorias', 'eventos.id_evento', 'eventos_categorias.id_evento').where('eventos_categorias.id_categoria', id)
  },
  getEventsByTextSearch: (textToFind) => {
    // console.log(textToFind)
    return knex.select().from('eventos'
    ).andWhere('esta_activo', 1
    ).andWhere('esta_aprobado', 1
    ).where('nombre_evento', 'like', `%${textToFind}%`
    ).orWhere('nombre_organizador', 'like', `%${textToFind}%`
    ).orWhere('ciudad', 'like', `%${textToFind}%`
    ).orWhere('estado', 'like', `%${textToFind}%`
    ).andWhere('esta_activo', 1
    ).andWhere('esta_aprobado', 1)
    /* SELECT * FROM eventos e INNER JOIN eventos_categorias ec ON e.id_evento = ec.id_evento  WHERE ec.id_categoria = 4; */
  },
  getAllByCiudad: (name) => {
    return knex.select().table('eventos').where('ciudad', name).where('esta_activo', 1).where('esta_aprobado', 1)
  },
  getAllByEstado: (name) => {
    return knex.select().table('eventos').where('estado', name).where('esta_activo', 1).where('esta_aprobado', 1)
  }
}

module.exports = { Event }
