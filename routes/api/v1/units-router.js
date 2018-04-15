var express = require('express');
var router = express.Router();
var UnitsController = require('../../../controllers/units-controller')

let unitsController = new UnitsController


router.get("/", unitsController.index)

router.get("/:id", unitsController.show)

router.post("/:unit_id/users", unitsController.updateUnitWithUsers);

router.post('/', unitsController.create)

router.delete('/:id', unitsController.destroyUnit)

router.delete("/:unit_id/users/:user_id", unitsController.destroyUnitUserAssociation)

module.exports = router;
