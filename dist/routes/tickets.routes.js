"use strict";

var _express = require("express");

var _tickets = require("../controllers/tickets.controller");

var router = (0, _express.Router)();
router.get('/', _tickets.ticketController.getAll);
router.get('/:id', _tickets.ticketController.getOne);
router.post('/', _tickets.ticketController.postOne);
router.put('/:id', _tickets.ticketController.updateOne);
router["delete"]('/:id', _tickets.ticketController.deleteOne);
module.exports = router;