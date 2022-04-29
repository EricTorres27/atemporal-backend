const jwt = require('jsonwebtoken')
const generalAppSecret = 'myKeyGeneral'
const recoverAppSecret = 'myKeyRecover'
export const authUtil = {
  createToken: (data, expiration = '6h') => {
    const token = jwt.sign(data, generalAppSecret, { expiresIn: expiration }) // this is temporal
    return token
  },
  createTokenRecoverPassword: (data, expiration) => {
    const token = jwt.sign(data, recoverAppSecret, { expiresIn: expiration * 1000 * 60 }) // this is temporal
    return token
  },
  verifyToken: (token) => {
    return jwt.verify(token, generalAppSecret)
  }
}
