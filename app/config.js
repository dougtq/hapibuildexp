import { config } from 'dotenv'

config() // acess the env vars

export default {
    hostname: process.env.HAPI_HOST || 'localhost',
    port: process.env.HAPI_PORT || 3000
  }
