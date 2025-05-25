const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  stock: Number
});
module.exports = mongoose.model('Item', ItemSchema);
