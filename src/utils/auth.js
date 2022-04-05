const jwt = require('jsonwebtoken')
const mySecret = 'myKey'
export const authUtil = {
  createToken: (data) => {
    const token = jwt.sign(data, mySecret) // this is temporal
    return token
  },
  verifyToken: (token) => {
    return jwt.verify(token, mySecret)
  }
}
