const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


class User {
  all() {
    return database.raw('SELECT id, first_name, last_name, email, access FROM users')
  }

  find(id) {
    return database.raw(`SELECT users.id AS user_id,
                      users.first_name AS first_name,
                      users.last_name AS last_name,
                      users.email AS email,
                      users.access AS access,
                      units.id AS unit_id,
                      units.unit_type AS unit_type,
                      units.unit_number AS unit_number,
                      units.rent AS rent_balance,
                      units.rent_due_date AS rent_due_date
                     FROM users
                   INNER JOIN unit_users ON users.id = unit_users.user_id
                   INNER JOIN units ON unit_users.unit_id = units.id
                  WHERE user_id = ?`, id)
  }

  create(params) {
    return database.raw(`INSERT INTO users(first_name, last_name, email, password, access)
    VALUES(?, ?, ?, ?, ?)
    RETURNING id, first_name, last_name, email, access`, [params.first_name, params.last_name, params.email, params.password, params.access])
  }

  update(id, params) {
    return database.raw(`UPDATE users
                        SET first_name = ?, last_name = ?,
                        email = ?, password = ?
                        WHERE id = ?
                        RETURNING first_name, last_name,
                        email, access`,
                        [params.first_name, params.last_name, params.email, params.password, id])
  }

  destroy(id) {
    return database.raw(`DELETE FROM users WHERE id = ?`, id)
  }
}

module.exports = User
