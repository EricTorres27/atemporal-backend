import routerUser from './users.routes'
import routerEvent from './events.routes'
import routerTicket from './tickets.routes'
import routerCategory from './categories.routes'

export const initRoutes = (app) => {
  app.use('/usuarios', routerUser)
  app.use('/eventos', routerEvent)
  app.use('/boletos', routerTicket)
  app.use('/categorias', routerCategory)
}
