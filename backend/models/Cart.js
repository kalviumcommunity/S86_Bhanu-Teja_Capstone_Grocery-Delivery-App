const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
  userId: String,
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    quantity: Number
  }]
});
module.exports = mongoose.model('Cart', CartSchema);
