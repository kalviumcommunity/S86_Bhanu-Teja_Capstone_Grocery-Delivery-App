const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
});

module.exports = mongoose.model("Cart", cartSchema);
