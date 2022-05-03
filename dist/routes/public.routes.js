"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth.controller");

var _events = require("../controllers/events.controller");

var _users = require("../controllers/users.controller");

var _auth2 = require("../middlewares/auth.middleware");

var _user = require("../middlewares/user.middlewares");

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  return res.json({
    msg: 'Server is running 🐱‍🏍'
  });
});
router.get('/eventos', _events.eventController.getAll);
router.get('/eventos/:id', _events.eventController.getOne);
router.post('/register', _user.userMiddleware.validateCreateAccount, _auth.authController.registerAccount);
router.post('/login', _user.userMiddleware.validateLogin, _auth.authController.loginUser);
router.post('/recuperar-password', _user.userMiddleware.validateEmail, _auth.authController.recoverPassword);
router.put('/cambiar-password', _user.userMiddleware.validatePassword, _auth2.authMiddleware.verifyTokenRecoverPassword, _users.userController.recoverPassword);
var _default = router;
exports["default"] = _default;