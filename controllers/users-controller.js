var User = require('../models/user')
User = new User

class UsersController {
  index(req, res, next) {
    User.all()
      .then((data) => {res.send(data.rows)})
  }

  show(req, res, next) {
    User.find(req.params.id)
      .then((data) => {res.send(data.rows)} )
  }

  create(req, res, next) {
    User.create(req.body.user)
      .then((data) => {
        res.send(data.rows[0])
      })
  }

  update(req, res, next) {
    User.update(req.params.id, req.body.user)
      .then((data) => {res.send(data.rows[0])})
  }

  destroy(req,res, next) {
    User.destroy(req.params.id)
      .then((data) => res.send(data.rows))
  }

}





module.exports = UsersController
