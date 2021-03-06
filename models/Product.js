const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
 
  code: {
    type: Number,
    required: true
  }
  
},{versionKey: false});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
