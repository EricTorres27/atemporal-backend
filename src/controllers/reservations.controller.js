import { Reservations } from '../models/Reservation'

export const reservationController = {

  getAll: async (req, res) => {
    try {
      // Categorias realiza una peticion al Modelo, y espera a que termine
      const reservations = await Reservations.getAll()
      res.status(200).json(reservations)
    } catch (error) { // En caso de error se arroja el error a la consola y regresamos un estado 500
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer las reservaciones' })
    }
  },

  getAllReservationsByUser: async (req, res) => {
    try {
      const reservation = await Reservations.getAllReservationByUser(req.params.id)
      if (reservation[0]) {
        res.json(reservation[0])
      } else {
        res.status(400).json({ msg: 'Esta reservacion no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer la reservacion' })
    }
  },

  getAllReservationsByEvent: async (req, res) => {
    try {
      const reservation = await Reservations.getAllReservationsByEvent(req.params.id)
      if (reservation[0]) {
        res.json(reservation[0])
      } else {
        res.status(400).json({ msg: 'Esta reservacion no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer la reservacion' })
    }
  },

  postOne: async (req, res) => {
    try {
      const resp = await Reservations.postOne(req.body)
      res.status(201).json(resp[0])
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al publicar la reservacion' })
    }
  },

  updateOne: async (req, res) => {
    try {
      const resp = await Reservations.updateOne(req.params.id, req.body)
      if (resp) {
        res.status(202).json({ rows_affected: resp })
      } else {
        res.status(400).json({ msg: 'Esta reservacion no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al actualizar la reservacion' })
    }
  },

  deleteOne: async (req, res) => {
    try {
      const resp = await Reservations.deleteOne(req.params.id)
      if (resp) {
        res.status(202).json({ rows_affected: resp })
      } else {
        res.status(400).json({ msg: 'Esta reservacion no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al borrar la reservacion' })
    }
  },

  verifyReservations: async (req, res) => {
    try {
      const reservation = await Reservations.verifyReservation(req.params.id_evento, req.params.id_usuario)
      if (reservation[0]) {
        res.json(reservation[0])
      } else {
        res.status(400).json({ msg: 'Esta reservacion no existe' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer la reservacion' })
    }
  }
}
