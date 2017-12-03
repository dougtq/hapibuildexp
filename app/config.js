import { config } from 'dotenv'

export default (() => {
  config()
  return {
    hostname: process.env.HAPI_HOST || 'localhost',
    port: process.env.HAPI_PORT || 3000
  }
})()
