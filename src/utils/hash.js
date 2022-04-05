import bcrypt from 'bcrypt'

export const hashUtil = {
  compareHash: (plainText, hash) => {
    return bcrypt.compareSync(plainText, hash)
  },
  createHash: (plainText) => {
    return bcrypt.hashSync(plainText, 10)
  }
}
