import hapi from 'hapi'
import info from './config'

import router from 'hapi-router'

let Hapi = new hapi.Server()

Hapi.connection({ port: info.port, host: info.hostname })

Hapi.route([
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply({ sucess: true })
    }
  }
])

Hapi.register(
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
    Hapi.start(erro => {
      if (err) {
        console.error(err.message)
        process.exit(1)
      }
      console.log('%s rodando na %s', Hapi.info.host, Hapi.info.port)
    })
  }
)
