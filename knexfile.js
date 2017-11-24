export default {
  development: {
    client: 'pg',
    connection: `pg://${process.env.DB_USER}:${process.env.DB_PASS}@${process
      .env.DB_ENDPOINT}/${process.env.DB}`
  },
  production: {
    client: 'pg',
    connection: `pg://${process.env.DB_USER}:${process.env.DB_PASS}@${process
      .env.DB_ENDPOINT}/${process.env.DB}`
  }
}
