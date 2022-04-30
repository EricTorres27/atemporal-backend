import userRouter from './users.routes'
import publicRouter from './public.routes'
import eventRouter from './events.routes'
import ticketRouter from './tickets.routes'
import categoryRouter from './categories.routes'
import { authMiddleware } from '../middlewares/auth.middleware'

export const initRoutes = (app) => {
  app.use('/', publicRouter)
  app.use(authMiddleware.verifyToken)
  app.use('/usuarios', userRouter)
  app.use('/eventos', eventRouter)
  app.use('/boletos', ticketRouter)
  app.use('/categorias', categoryRouter)
}
