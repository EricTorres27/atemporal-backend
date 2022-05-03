"use strict";

var _express = require("express");

var _paymentMeth = require("../controllers/paymentMeth.controller");

var _paymentMeth2 = require("../middlewares/paymentMeth.middleware");

var router = (0, _express.Router)(); // Metodos GET

router.get('/', _paymentMeth.paymentMethController.getAll); // ✅

router.get('/:id', _paymentMeth.paymentMethController.getOne); // ✅
// Metodos POST

router.post('/', _paymentMeth2.validateCreatePaymentMeth, _paymentMeth.paymentMethController.postOne); // ✅
// Metodos PUT

router.put('/:id', _paymentMeth.paymentMethController.updateOne); // ✅
// Metodo DELETE

router["delete"]('/:id', _paymentMeth.paymentMethController.deleteOne); // ✅

module.exports = router;