"use strict";

var _express = require("express");

var _users = require("../controllers/users.controller");

var _user = require("../middlewares/user.middlewares");

var router = (0, _express.Router)();
router.get('/', _users.userController.getAll);
router.get('/me', _users.userController.whoIam);
router.get('/:id', _users.userController.getOne);
router.post('/', _user.userMiddleware.validateCreateAccount, _users.userController.postOneAdmin);
router.put('/:id', _users.userController.updateOne);
router["delete"]('/:id', _users.userController.deleteOne);
module.exports = router;