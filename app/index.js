import { Server } from 'hapi'
import info from './config'
import Session from './entities/sessions/route'

let hapi = new Server()
// let Sessao

hapi.connection({ port: info.port, host: info.hostname })

hapi.route([...Session])

hapi.register(
  {
    register: require('hapi-router'),
    options: {
      routes: ['entities/sessions/route.js']
    }
  },
  err => {
    if (err) {
      console.error(err.message)
      process.exit(1)
    }
    hapi.start(err => {
      if (err) {
        console.error(err.message)
        process.exit(1)
      }
      console.log('%s rodando na %s', hapi.info.host, hapi.info.port)
    })
  }
)
