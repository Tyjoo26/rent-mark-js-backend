var express = require('express');
var router = express.Router();
var EventsController = require('../../../controllers/events-controller')

let eventsController = new EventsController


router.get('/', eventsController.index);

router.get('/:event_id', eventsController.show);

router.post('/', eventsController.createEvent);

router.post("/:event_id/users", eventsController.createEventUser);

router.delete("/:event_id/users/:user_id", eventsController.destroyUserFromEvent)

router.delete('/:event_id', eventsController.destroyEvent);

module.exports = router;
