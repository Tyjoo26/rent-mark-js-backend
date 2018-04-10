var express = require('express');
var router = express.Router();
var UnitsController = require('../../../controllers/units-controller')

let unitsController = new UnitsController


router.get("/", unitsController.index)

router.get("/:id", unitsController.show)

module.exports = router;
