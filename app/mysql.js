import knex from 'knex'
import bookshelf from 'bookshelf'

exports = bookshelf(
  knex({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'sa',
      password: 'douglas01',
      database: 'test',
      charset: 'utf8'
    }
  })
)
