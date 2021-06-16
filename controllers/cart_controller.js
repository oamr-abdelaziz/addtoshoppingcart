const Cart = require('../models/Cart');
const Product = require('../models/Product');

module.exports = {

  //get all cart items
  all(req, res, next) {
    Cart.find({})
        .then((items) => {
            res.status(200).json(items)
        })
        .catch(next);
},

// search if product exists in products collection and add it to cart
  async addtocart(req, res) {

    //request body is the code of the product and its quantity
    console.log(req.body);
   
    const {
      code,
      size,
      quantity
    } = req.body;

    try {
      //Search if product exists
      let product = await Product.findOne({ code });
      if (!product) {
        //handling product missing error
        return res.status(400).json({
          msg: "product Doesn't Exists",
        });
      }

      //Create new cart item with the product object and the quantity
      let cartItem = new Cart({
        product,
        size,
        quantity
      });

      //save the cart item
      await cartItem.save();
      res.status(200).send("Saved Successfully");

    } catch (err) {
      //handle saving error
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  },
};
