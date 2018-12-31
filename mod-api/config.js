'use strict'

const debug = require('debug')('mod:api:db')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'patelecom',
    username: process.env.DB_USER || 'patelecom',
    password: process.env.DB_PASS || 'patelecom',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s)
  },
  auth: {
    secret: process.env.SECRET || 'secret'
  }
}
