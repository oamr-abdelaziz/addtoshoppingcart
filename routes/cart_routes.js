const cartController = require('../controllers/cart_controller');
const express = require('express');
const router = express.Router();

// get cart data endpoint
router.get('/items',cartController.all)

// search in products and add to cart endpoint
router.post('/addtocart',cartController.addtocart);


module.exports = router;
