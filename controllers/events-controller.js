var Event = require('../models/event')
let event = new Event


class EventsController {
  index(req, res) {
    event.groupUsersByEvents(event.allUsersWithEvents())
      .then((data) => {res.send(data)})
  }
  show(req,res) {
    event.groupUsersByEvents(event.show(req.params.event_id))
      .then((data) => {res.send(data[0])})
  }
}


module.exports = EventsController
