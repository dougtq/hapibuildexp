'use strict'

import * as bcrypt from 'bookshelf-bcrypt'
import * as knexfile from '../knexfile'
import * as knex from 'knex'
import * as bookshelf from 'bookshelf'

knex(knexfile[process.env.NODE_ENV || 'development'])
bookshelf(knex)
bookshelf.plugin(bcrypt)
bookshelf.plugin('visibility')

export default { bookshelf }
