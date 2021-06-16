const express = require('express');
const cartRoutes = require('../routes/cart_routes');
const productRoutes = require('../routes/product_routes');

const MongoServer = require('../config/db');
const app = express();


// initiating Mongo Connection
MongoServer();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

// main endpoint
app.use('/cart',cartRoutes);
app.use('/product',productRoutes);


app.use((err, req, res, next)=>{
  console.log(err.message);
  res.status(422).send({err: err.message})

})

module.exports = app;