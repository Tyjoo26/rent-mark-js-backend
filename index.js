var jwt = require('jsonwebtoken');

var token = jwt.sign({ username: 'tyjoo', password:  }, 'shhhhh');
