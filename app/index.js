import hapi from 'hapi'
import info from './config'
import { config } from 'dotenv'
import router from 'hapi-router'

config()

let Hapi = new hapi.Server()

Hapi.connection({ port: info.port, host: info.hostname })
Hapi.register(router, {
  options: {
    routes: ['entities/**/route.js']
  }
})

Hapi.route([
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply({ sucess: true })
    }
  }
])

Hapi.start((err) => {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }
  console.log('%s rodando na %s', Hapi.info.host, Hapi.info.port)
})
