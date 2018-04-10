var express = require('express');
var router = express.Router();
var EventsController = require('../../../controllers/events-controller')

let eventsController = new EventsController


router.get('/', eventsController.index);

router.get('/:event_id', eventsController.show);

router.post('/', eventsController.createEvent);


module.exports = router;
