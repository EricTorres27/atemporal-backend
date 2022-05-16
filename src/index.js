import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { PORT, app } from './app'
require('colors')

async function main () {
  await app.listen(PORT, () => {
    console.log(`Server is ready in ${PORT} 😎`.bgWhite.red)
  })
}

main()
