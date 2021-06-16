const productController = require('../controllers/product_controller');
const express = require('express');
const router = express.Router();

// get all products endpoint
router.get('/items',productController.all)

module.exports = router;
