import { Category } from '../models/Category'

export const categoryController = {

  getAll: async (req, res) => {
    try {
      // Categorias realiza una peticion al Modelo, y espera a que termine
      const categories = await Category.getAll()
      res.status(200).json(categories)
    } catch (error) { // En caso de error se arroja el error a la consola y regresamos un estado 500
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer las categorias' })
    }
  },

  getOne: async (req, res) => {
    try {
      const category = await Category.getOnebyId(req.params.id)
      if (category[0]) {
        res.json(category[0])
      } else {
        res.status(400).json({ msg: 'Esta categoria no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer la categoria' })
    }
  },

  postOne: async (req, res) => {
    try {
      const resp = await Category.postOne(req.body)
      res.status(201).json(resp[0])
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al publicar la categoria' })
    }
  },

  updateOne: async (req, res) => {
    try {
      const resp = await Category.updateOne(req.params.id, req.body)
      if (resp) {
        res.status(202).json({ rows_affected: resp })
      } else {
        res.status(400).json({ msg: 'Esta categoria no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al actualizar la categoria' })
    }
  },

  deleteOne: async (req, res) => {
    try {
      const resp = await Category.deleteOne(req.params.id)
      if (resp) {
        res.status(202).json({ rows_affected: resp })
      } else {
        res.status(400).json({ msg: 'Esta categoria no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al borrar la categoria' })
    }
  }
}
