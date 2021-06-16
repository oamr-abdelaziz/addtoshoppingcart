const Product = require('../models/Product');

module.exports = {

  //get all products
  all(req, res, next) {
    Product.find({})
        .then((items) => {
            res.status(200).json(items)
        })
        .catch(next);
}
};
