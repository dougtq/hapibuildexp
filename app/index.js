import * as Hapi from 'hapi'
import * as info from './config'

import router from 'hapi-router'

let hapi = new Hapi.Server()

hapi.connection({ port: info.port, host: info.hostname })

hapi.route([
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply({ sucess: true })
    }
  }
])

hapi.register(
  {
    register: router,
    options: {
      routes: ['entities/**/route.js']
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
