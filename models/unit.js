const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Unit {
  all() {
    return database.raw(`SELECT units.id AS unit_id,
                        units.unit_type AS unit_type, units.unit_number AS unit_number,
                        units.rent as unit_rent,
                        units.rent_due AS unit_rent_due, units.rent_due_date AS unit_rent_due_date, users.id AS user_id,
                        users.first_name AS user_first_name, users.last_name AS user_last_name, users.email AS user_email
                        FROM units
                      INNER JOIN unit_users ON units.id = unit_users.unit_id
                      INNER JOIN users ON users.id = unit_users.user_id`)
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
  validateUnitExists(unit_id) {
    return database.raw(`SELECT * FROM units WHERE id = ?`, unit_id)
      .then((data) => {
        if (data.rowCount > 0 ) {
          return true
        } else {
          return false
        }
      })
  }
  validateUserExists(user_id) {
    return database.raw(`SELECT * FROM users where id = ?`, user_id)
      .then((data) => {
        if (data.rowCount > 0 ) {
          return true
        }  else {
          return false
        }
      })
  }
  createUnitUserAssociation(unit_id, user_id) {
    if (this.validateUnitExists(unit_id).then((result) => result) && (this.validateUserExists(user_id).then((result) => result))) {
        return database.raw(`INSERT INTO unit_users(unit_id, user_id) VALUES (?, ?)`, [unit_id, user_id])
      } else {
        return false
      }
  }
  createUnit(params) {
    return database.raw(`INSERT INTO units(unit_type, unit_number, rent, rent_due, rent_due_date) VALUES (?, ? , ? , ? , ?)
    RETURNING unit_type, unit_number, rent, rent_due, rent_due_date`, [params.unit_type, params.unit_number, params.rent, params.rent_due, params.rent_due_date])
  }
  destroyUnit(unit_id) {
    if (this.validateUnitExists(unit_id) === false) {
      return false
    } else {
      return database.raw(`DELETE FROM units WHERE id = ?`, unit_id)
    }
  }
  destroyUserFromUnit(unit_id, user_id) {
    if (this.validateUnitExists(unit_id).then((result) => result) && (this.validateUserExists(user_id).then((result) => result))) {
        return database.raw(`DELETE FROM unit_users WHERE id IN (SELECT id FROM unit_users WHERE unit_users.unit_id = ? AND unit_users.user_id = ?)`, [unit_id, user_id])
      } else {
        return false
      }
  }
}


module.exports = Unit
