import { State } from '../models/State'

export const stateController = {

  getAll: async (req, res) => {
    try {
      // Categorias realiza una peticion al Modelo, y espera a que termine
      const states = await State.getAll()
      res.status(200).json(states)
    } catch (error) { // En caso de error se arroja el error a la consola y regresamos un estado 500
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer las categorias' })
    }
  },

  getOne: async (req, res) => {
    try {
      const state = await State.getOnebyId(req.params.id)
      if (state[0]) {
        res.json(state[0])
      } else {
        res.status(400).json({ msg: 'Esta categoria no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer la categoria' })
    }
  }
}
