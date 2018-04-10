const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Unit {
  all() {
    return database.raw(`SELECT * FROM units`)
  }
}


module.exports = Unit
