// @flow
import hapi from 'hapi'
import config from './config'  

let Hapi = new hapi.Server()

Hapi.connection({ port: config.port, host: config.hostname })

Hapi.start((err: Error) => {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }

  console.log('%s rodando na %s', Hapi.info.host, Hapi.info.port)
})

// function foo(x: ?string): string | void {
//   if (x) {
//     return 'default string' // simple example
//   }
// }
