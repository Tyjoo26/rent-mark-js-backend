var express = require('express');
var router = express.Router();
var UsersController = require('../../../controllers/users-controller')

let usersController = new UsersController


router.get('/', usersController.index);

router.get('/:id',  usersController.show);

router.post("/", usersController.create);

router.patch("/:id", usersController.update)

router.delete('/:id', usersController.destroy)

module.exports = router
