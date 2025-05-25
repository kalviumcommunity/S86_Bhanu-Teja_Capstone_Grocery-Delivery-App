const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  userId: String,
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    quantity: Number
  }],
  deliverySlot: String,
  status: String
});
module.exports = mongoose.model('Order', OrderSchema);
