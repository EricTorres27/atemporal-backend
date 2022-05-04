require('dotenv').config()
const globalConfig = {
  DEV: {
    DATABASE: {
      client: 'mysql2',
      host: process.env.DB_HOST,
      database: process.env.DB_NAME_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD_DEV,
      port: process.env.DB_PORT
    },
    CLOUDINARY: {
      cloud_name: '',
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true
    },
    JWT_TOKEN: {
      login: 'LOGIN',
      recover_password: 'RECOVER'
    },
    SMTP_CREDENTIALS: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    },
    PORT: 4000
  },
  PRODUCTION: {
    DATABASE: {
      client: 'mysql2',
      host: process.env.DB_HOST,
      database: process.env.DB_NAME_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD_DEV,
      port: process.env.DB_PORT
    },
    CLOUDINARY: {
      cloud_name: '',
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true
    },
    JWT_TOKEN: {
      login: process.env.JWT_LOGIN,
      recover_password: process.env.JWT_RECOVER_PASSWORD
    },
    SMTP_CREDENTIALS: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    },
    PORT: process.env.PORT
  }
}

export const MODE_CONFIG =
  process.env.NODE_ENV === 'PRODUCTION' ? 'PRODUCTION' : 'DEV'

export default globalConfig[MODE_CONFIG]
