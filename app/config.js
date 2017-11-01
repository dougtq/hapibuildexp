import { config } from 'dotenv'

export default (() => {
  config()
  return {
    hostname: process.env.hostname.toString(),
    port: Number(process.env.port)
  }
})()
