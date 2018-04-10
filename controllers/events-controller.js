var Event = require('../models/event')
let event = new Event


class EventsController {
  index(req, res) {
    event.all()
      .then((data) => {res.send(data.rows)})
  }
  show(req,res) {
    event.groupUsersByEvents(event.showCheck(req.params.event_id))
      .then((data) => {res.send(data[0])})
  }
  createEvent(req, res) {
    event.createEvent(req.body.event)
      .then((data) => res.send(data.rows[0]))
  }
  createEventUser(req, res) {
    event.createEventUserAssociation(req.params.event_id, req.params.user_id)
      .then((data) => {
        if (data ===false) {
          res.status(404).send()
        } else {
          res.send()
        }
      })
  }
  destroyUserFromEvent(req, res) {
    event.destroyUserFromEvent(req.params.event_id, req.params.user_id)
      .then((data) => {
        if (data === false) {
          res.status(404).send()
        } else {
          res.send()
        }
      })
  }
  destroyEvent(req, res) {
    event.destroyEvent(req.params.event_id)
      .then((data) => {
        if (data === false) {
          res.status(404).send()
        } else {
          res.send()
        }
      })
  }
}


module.exports = EventsController
