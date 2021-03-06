const mongoose = require("mongoose");

//mongodb+srv://airbnb_admin:airbnb123@airbnb.ptqry.mongodb.net/admin //PUT IN COMPASS

const MONGOURI = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.sijra.mongodb.net/shopping_sample?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;