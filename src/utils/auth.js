import globalConfig from '../config'
import { User } from '../models/User'

const jwt = require('jsonwebtoken')

export const authUtil = {
  createTokenLogin: (data, expiration = '6h') => {
    const token = jwt.sign(data, globalConfig.JWT_TOKEN.login, { expiresIn: expiration }) // this is temporal
    return token
  },
  createTokenRecoverPassword: (data, expiration) => {
    const token = jwt
      .sign(data, globalConfig.JWT_TOKEN.recover_password, { expiresIn: `${expiration * 1000 * 60}ms` }) // this is temporal
    return token
  },
  verifyToken: (token, type = 'login') => {
    return type === 'login'
      ? jwt.verify(token, globalConfig.JWT_TOKEN.login)
      : jwt.verify(token, globalConfig.JWT_TOKEN.recover_password)
  }
}
