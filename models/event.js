const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


class Event {
  all() {
    return database.raw(`SELECT * FROM events`)
  }
  allUsersWithEvents() {
    return database.raw(`
      SELECT events.id AS event_id,
             events.event_name AS event_name,
             events.event_details AS event_details,
             events.event_date AS event_date,
             users.id AS user_id,
             users.first_name AS user_firstname,
             users.last_name AS user_lastname,
             users.email AS user_email,
             users.access AS user_status
             FROM events
       INNER JOIN event_users on events.id = event_users.event_id
       INNER JOIN users ON users.id = event_users.user_id
      `)
  }
  groupUsersByEvents(collection) {
    return collection.then((data) => {
      let rows = data.rows
      let eventUsers = rows.reduce((result, row) => {
        if (!result[row.event_id]) {
          result[row.event_id] = {
            id: row.event_id,
            name: row.event_name,
            details: row.event_details,
            date: row.event_date,
            users: []}
        }
        let user = {
          id: row.user_id,
          first_name: row.user_firstnmae,
          last_name: row.user_lastname,
          email: row.user_email,
          status: row.user_status
        }
        result[row.event_id].users.push(user)
        return result
      }, {})
      let eventOutput = []
      for (let e in eventUsers) {
        eventOutput.push(eventUsers[e])
      }
      return eventOutput
    })
  }
  showCheck(id) {
    if (this.showWithUser(id) === undefined) {
      return this.show(id)
    } else {
      return this.showWithUser(id)
    }
  }
  showWithUser(id) {
    return database.raw(`SELECT events.id AS event_id,
           events.event_name AS event_name,
           events.event_details AS event_details,
           events.event_date as event_date,
           users.id AS user_id,
           users.first_name AS user_firstname,
           users.last_name AS user_lastname,
           users.email AS user_email,
           users.access AS user_status
           FROM events
     INNER JOIN event_users on events.id = event_users.event_id
     INNER JOIN users ON users.id = event_users.user_id
     WHERE event_id = ?`, id)
  }
  show(id) {
    return database.raw(`SELECT * FROM events WHERE id = ?`, id)
  }
  validateEventExists(event_id) {
    return database.raw(`SELECT * FROM events WHERE id = ?`, event_id)
      .then((data) => {
        if (data.rowCount > 0) {
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
  createEventUserAssociation(event_id, user_id) {
    if (this.validateEventExists(event_id).then((result)=> result)
      && this.validateUserExists(user_id).then((result) => result)) {
        return database.raw(`INSERT INTO event_users(event_id, user_id) VALUES(?, ? )`, [event_id, user_id])
      } else {
        return false
      }
  }
  createEvent(params) {
    return database.raw(`INSERT INTO events(event_name, event_details, event_date)
    VALUES(?, ?, ? )
    RETURNING id, event_name, event_details, event_date`,
    [params.event_name, params.event_details, params.event_date])
  }
  update(id, params) {
    return database.raw(`UPDATE events
                         SET event_name = ?, event_details = ?, event_date = ?
                         WHERE id = ?
                         RETURNING event_name, event_details, event_date`,
                         [params.event_name, params.event_details, params.event_date, id])
  }
  destroyUserFromEvent(event_id, user_id) {
    if (this.validateEventExists(event_id).then((result)=> result)
      && this.validateUserExists(user_id).then((result) => result)) {
        return database.raw(`DELETE FROM event_users WHERE id IN (SELECT id FROm event_users WHERE event_users.event_id = ? AND event_users.user_id = ? LIMIT 1)`, [event_id, user_id])
      } else {
        return false
      }
  }
  destroyEvent(event_id) {
    return database.raw(`DELETE FROM events WHERE id = ?`, event_id)
  }
}

module.exports = Event
