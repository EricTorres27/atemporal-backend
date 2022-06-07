import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { cloudinary } from './utils/cloudinary.js'

import { initRoutes } from './routes'
// Constantes
const PORT = process.env.PORT || 4000

const app = express()
app.disable('etag')

// Middlewares
app.use(cors()) // Una configuracion de seguridad entre headers
app.use(morgan('dev')) // Muestra en consola la url, tiempo y status solicitado

// Image Upload
app.use(express.json({ limit: '10Mb' }))
app.use(express.urlencoded({ limit: '10Mb', extended: true }))

// Iniciar rutas
initRoutes(app)

module.exports = {
  PORT,
  app
}
