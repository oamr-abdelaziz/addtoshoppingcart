//The main purpose of this reposatory is the addtocart end point which searches in products for the product, add it to cart or increase its quantity in the cart.
//You can try the endpoint within the nodejs project which gives you three endpoints:-
//1)fetch products
//2)fetch cart items
//3)add to cart

//Here is the addtocart endpoint alone also:-

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
  }
