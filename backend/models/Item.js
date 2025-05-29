const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  categoryId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Item", itemSchema);
