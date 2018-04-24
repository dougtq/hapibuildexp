import knex from 'knex'
import bookshelf from 'bookshelf'

export default bookshelf(
  knex({
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_ADMIN,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      charset: 'utf8'
    }
  })
)
