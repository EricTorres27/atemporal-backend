import { PaymentMeth } from '../models/PaymentMeth'

export const paymentMethController = {

  getAll: async (req, res) => {
    try {
      // Categorias realiza una peticion al Modelo, y espera a que termine
      const paymentMeth = await PaymentMeth.getAll()
      res.status(200).json(paymentMeth)
    } catch (error) { // En caso de error se arroja el error a la consola y regresamos un estado 500
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer los metodos de pago' })
    }
  },

  getOne: async (req, res) => {
    try {
      const paymentMeth = await PaymentMeth.getOnebyId(req.params.id)
      if (paymentMeth[0]) {
        res.json(paymentMeth[0])
      } else {
        res.status(400).json({ msg: 'Esta metodo de pago no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer el metodos de pago' })
    }
  },

  postOne: async (req, res) => {
    try {
      const resp = await PaymentMeth.postOne(req.body)
      res.status(201).json(resp[0])
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al publicar la categoria' })
    }
  },

  updateOne: async (req, res) => {
    try {
      const resp = await PaymentMeth.updateOne(req.params.id, req.body)
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
      const resp = await PaymentMeth.deleteOne(req.params.id)
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
