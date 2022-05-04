import globalConfig, { MODE_CONFIG } from '../config'
import fs from 'fs'
import path from 'path'

const DEV_CONFIG = {
  host: globalConfig.DATABASE.host,
  port: globalConfig.DATABASE.port,
  user: globalConfig.DATABASE.user,
  password: globalConfig.DATABASE.password,
  database: globalConfig.DATABASE.database
}

const PRODUCTION_CONFIG = {
  host: globalConfig.DATABASE.host,
  port: globalConfig.DATABASE.port,
  user: globalConfig.DATABASE.user,
  password: globalConfig.DATABASE.password,
  database: globalConfig.DATABASE.database,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, '/ca-certificate.crt'))
  }
}

export const knex = require('knex')({
  client: 'mysql',
  connection: MODE_CONFIG === 'PRODUCTION' ? PRODUCTION_CONFIG : DEV_CONFIG,
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
    },
    confirm (message) {
      console.log(message)
    }
  }
})
