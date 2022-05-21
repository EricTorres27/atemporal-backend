import globalConfig from '../config'

export const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: globalConfig.CLOUDINARY.cloud_name,
  api_key: globalConfig.CLOUDINARY.api_key,
  api_secret: globalConfig.CLOUDINARY.api_secret
})
