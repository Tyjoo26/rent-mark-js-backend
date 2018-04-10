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
}


module.exports = EventsController
