import { authUtil } from '../utils/auth'

export const verifyToken = (req, res, next) => {
  const { headers, body } = req
  const { authorization = undefined } = headers

  if (!authorization) {
    res.status(500).json({ msg: 'missing token' })
    return
  }

  const token = authorization.split(' ')[1]
  console.log(token, '😀')

  const decodedToken = authUtil.verifyToken(token)

  if (!decodedToken) {
    res.status(500).json({ msg: 'invalid token' })
    return
  }
  const { id } = decodedToken

  // We add the id in body for the other middleware functions
  body.id = id

  // Next middleware
  next()
}
