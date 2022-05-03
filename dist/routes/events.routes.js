"use strict";

var _express = require("express");

var _events = require("../controllers/events.controller");

var _event = require("../middlewares/event.middlewares");

var router = (0, _express.Router)();
router.get('/', _events.eventController.getAll);
router.get('/:id', _events.eventController.getOne);
router.post('/', _events.eventController.postOne);
router.post('/register_event', _event.validateCreateEvent, _events.eventController.registerEvent);
router.put('/:id', _events.eventController.updateOne);
router["delete"]('/:id', _events.eventController.deleteOne);
module.exports = router;