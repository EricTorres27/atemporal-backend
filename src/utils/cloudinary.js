import globalConfig from '../config'

export const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: globalConfig.CLOUDINARY.cloud_name,
  api_key: globalConfig.CLOUDINARY.api_key,
  api_secret: globalConfig.CLOUDINARY.api_secret
})

export const cloudinaryUpload = async (fileStr) => {
  try {
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'dev_setups'
    })

    // console.log(uploadedResponse.secure_url)
    return uploadedResponse.secure_url
  } catch (error) {
    console.error(error)
  }
}
