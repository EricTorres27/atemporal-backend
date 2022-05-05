import globalConfig from '../config'
import fs from 'fs'
import path from 'path'

export const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: globalConfig.DATABASE.host,
    port: globalConfig.DATABASE.port,
    user: globalConfig.DATABASE.user,
    password: globalConfig.DATABASE.password,
    database: globalConfig.DATABASE.database
  },
  ssl: {
    require: true,
    rejectUnauthorized: false,
    ca: fs.readFileSync(path.join(__dirname, '/ca-certificate.crt'))
  },
  debug: true,
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
    }
  }
})
