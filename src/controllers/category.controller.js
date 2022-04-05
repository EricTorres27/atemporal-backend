import { Category } from '../models/Category'

export const categoryController = {
  getAll: async (req, res) => {
    try {
      const users = await Category.getAll()
      res.json(users)
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  },
  getOne: async (req, res) => {
    try {
      const user = await Category.getOne(req.params.id)
      res.json(user[0])
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  },
  postOne: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await Category.postOne(req.body)
      res.json(resp[0])
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  },
  updateOne: async (req, res) => {
    try {
      console.log(req.body)
      const resp = await Category.updateOne(req.params.id, req.body)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  },
  deleteOne: async (req, res) => {
    try {
      const resp = await Category.deleteOne(req.params.id)
      res.json({ rows_affected: resp })
    } catch (error) {
      console.log(error)
      res.json({ msg: 'error' })
    }
  }
}
