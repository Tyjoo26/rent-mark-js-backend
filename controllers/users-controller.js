var User = require('../models/user')
User = new User

class UsersController {
  index(req, res, next) {
    User.all()
      .then((data) => {res.send(data.rows)})
  }
}
