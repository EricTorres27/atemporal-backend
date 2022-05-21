import userRouter from './users.routes'
import publicRouter from './public.routes'
import eventRouter from './events.routes'
import ticketRouter from './tickets.routes'
import categoryRouter from './categories.routes'
import paymentMethRouter from './paymenthMeth.routes'
import { authMiddleware } from '../middlewares/auth.middleware'

export const initRoutes = (app) => {
  app.use('/', publicRouter)
  app.use(authMiddleware.verifyToken)
  app.use('/api/usuarios', userRouter)
  app.use('/api/eventos', eventRouter)
  app.use('/api/boletos', ticketRouter)
  app.use('/api/categorias', categoryRouter)
  app.use('/api/metodos-pago', paymentMethRouter)
}
