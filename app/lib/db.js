import bcrypt from 'bookshelf-bcrypt'
import knexfile from '../knexfile'
import knex from 'knex'
import bookshelf from 'bookshelf'

knex(knexfile[process.env.NODE_ENV || 'development'])
bookshelf(knex)
bookshelf.plugin(bcrypt)
bookshelf.plugin('visibility')

export default { bookshelf }
