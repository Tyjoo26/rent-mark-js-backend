const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


class User {
  all() {
    return database.raw('SELECT id, first_name, last_name, email, access FROM users')
  }
  show() {
    return database.raw(`SELECT id, first_name, last_name, email, access FROM users WHERE id = ?`, id)
  }
  create(params) {
    return database.raw(`INSERT INTO users(first_name, last_name, email, password, access)
    VALUES(?, ?, ?, ?, ?) RETURNING id, first_name, last_name, email, access`, [params.first_name, params.last_name, params.email, params.password, params. access])
  }
  update(id, params) {
    return database.raw(`UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? RETURNING first_name, last_name, email, access`, [params.first_name, params.last_name params.email, params.password])
  }
  destroy(id) {
    return database.raw(`DELETE FROM users WHERE id = ?`, id)
  }
}
