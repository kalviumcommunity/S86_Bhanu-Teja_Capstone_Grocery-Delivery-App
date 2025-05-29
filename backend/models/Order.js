const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  cartItems: Array,
  totalAmount: Number,
  paymentMethod: String,
  status: { type: String, default: "Processing" },
});

module.exports = mongoose.model("Order", orderSchema);
