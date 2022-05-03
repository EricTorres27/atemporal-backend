"use strict";

var _express = require("express");

var _category = require("../controllers/category.controller");

var _category2 = require("../middlewares/category.middleware");

var router = (0, _express.Router)(); // Metodos GET

router.get('/', _category.categoryController.getAll); // ✅

router.get('/:id', _category.categoryController.getOne); // ✅
// Metodos POST

router.post('/', _category2.validateCreateCategory, _category.categoryController.postOne); // ✅
// Metodos PUT

router.put('/:id', _category.categoryController.updateOne); // ✅
// Metodo DELETE

router["delete"]('/:id', _category.categoryController.deleteOne); // ✅

module.exports = router;