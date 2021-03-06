var Unit = require('../models/unit')
let unit = new Unit


class UnitsController {
  index(req, res) {
    unit.all()
      .then((data) => {res.send(data.rows)})
  }
  show(req, res) {
    unit.show(req.params.id)
      .then((data) => {res.send(data.rows)})
  }
  updateUnitWithUsers(req, res) {
    unit.createUnitUserAssociation(req.params.unit_id, req.params.user_id)
      .then((data) => {
        if (data === false) {
          res.status(404).send()
        } else {
          res.send()
        }
      })
  }
  create(req, res) {
    unit.createUnit(req.body.unit)
      .then((data) =>  {res.send(data.rows[0])})
  }
  destroyUnit(req, res) {
    unit.destroyUnit(req.params.id)
      .then((data) => {
        if (data === false) {
          res.status(404).send()
        } else {
          res.send()
        }
      })
  }
  destroyUnitUserAssociation(req,res) {
    unit.destroyUserFromUnit(req.params.unit_id, req.params.user_id)
      .then((data) => {
        if (data === false) {
          res.status(404).send()
        } else {
          res.send()
        }
      })
  }
}


module.exports = UnitsController
