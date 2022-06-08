import { Reservation } from '../models/Reservation'

export const reservationController = {

  getAll: async (req, res) => {
    try {
      // Categorias realiza una peticion al Modelo, y espera a que termine
      const reservations = await Reservation.getAll()
      res.status(200).json(reservations)
    } catch (error) { // En caso de error se arroja el error a la consola y regresamos un estado 500
      console.log(error)
      res.status(500).json({ msg: 'Error al extraer las reservaciones' })
    }
  },

  getAllReservationsByUser: async (req, res) => {
    try {
      console.log(req.params.idUsuario)
      const reservation = await Reservation.getAllReservationsByUser(req.params.idUsuario)
      console.log(reservation)
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
      const reservation = await Reservation.getAllReservationsByEvent(req.params.idEvento)
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
      const resp = await Reservation.postOne(req.body)
      res.status(201).json(resp[0])
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Error al publicar la reservacion' })
    }
  },

  updateOne: async (req, res) => {
    try {
      const resp = await Reservation.updateOne(req.params.id, req.body)
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
      const resp = await Reservation.deleteOne(req.params.id)
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

  getQrCodeByIds: async (req, res) => {
    try {
      const idUsuario = req.params.idUsuario || req.body.id // middleware from auth gives the token id user
      const idEvento = req.params.idEvento
      // console.log('idUsuario: ', idUsuario)
      const reservation = await Reservation.getQrCodeByIds(idEvento, idUsuario)
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
  getReservationByHash: async (req, res) => {
    try {
      const reservation = await Reservation.getReservationByHash(req.body.hash_qr)
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
