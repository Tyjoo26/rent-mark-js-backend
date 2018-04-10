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
}


module.exports = UnitsController
