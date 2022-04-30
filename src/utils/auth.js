const jwt = require('jsonwebtoken')
const generalAppSecret = 'myKeyGeneral'
export const authUtil = {
  createToken: (data, expiration = '6h') => {
    const token = jwt.sign(data, generalAppSecret, { expiresIn: expiration }) // this is temporal
    return token
  },
  createTokenRecoverPassword: (data, expiration) => {
    const token = jwt
      .sign(data, generalAppSecret, { expiresIn: `${expiration * 1000 * 60}ms` }) // this is temporal
    return token
  },
  verifyToken: (token) => {
    return jwt.verify(token, generalAppSecret)
  }
}
