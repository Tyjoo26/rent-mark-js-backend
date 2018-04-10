const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Unit {
  all() {
    return database.raw(`SELECT * FROM units`)
  }
  show(id) {
    return database.raw(`SELECT units.id AS unit_id,
                        units.unit_type AS unit_type, units.unit_number AS unit_number,
                        units.rent as unit_rent,
                        units.rent_due AS unit_rent_due, units.rent_due_date AS unit_rent_due_date, users.id AS user_id,
                        users.first_name AS user_first_name, users.last_name AS user_last_name, users.email AS user_email
                        FROM units
                      INNER JOIN unit_users ON units.id = unit_users.unit_id
                      INNER JOIN users ON users.id = unit_users.user_id
                      WHERE unit_id = ?`, id)
  }
}


module.exports = Unit
