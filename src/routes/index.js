import routerUser from './users.routes'
import routerPublic from './public.routes'
import routerEvent from './events.routes'
import routerTicket from './tickets.routes'
import routerCategory from './categories.routes'
import { verifyToken } from '../middlewares/auth.middleware'

export const initRoutes = (app) => {
  app.use('/', routerPublic)
  app.use(verifyToken)
  app.use('/usuarios', routerUser)
  app.use('/eventos', routerEvent)
  app.use('/boletos', routerTicket)
  app.use('/categorias', routerCategory)
}
