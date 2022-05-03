import globalConfig from '../config'
export const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: globalConfig.DATABASE.host,
    port: globalConfig.DATABASE.port,
    user: globalConfig.DATABASE.user,
    password: globalConfig.DATABASE.password,
    database: globalConfig.DATABASE.database
  },
  pool: {
    min: 0,
    max: 7
  },
  log: {
    warn (message) {
      console.warn(message)
    },
    error (message) {
      console.error(message)
    },
    deprecate (message) {
      console.warn(message)
    },
    debug (message) {
      console.info(message)
    }
  }
})
