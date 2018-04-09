var express = require('express');
var router = express.Router();
var UsersController = require('../../../controllers/users-controller')

let usersController = new UsersController


router.get('/', usersController.index);
