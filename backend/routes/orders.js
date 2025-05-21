const express = require('express');
const router = express.Router();

const orders = [];

router.get('/', (req, res) => {
  res.json(orders);
});

router.post('/create', (req, res) => {
  const { userId, cartItems, totalAmount, paymentMethod } = req.body;
  if (!userId || !cartItems || !totalAmount || !paymentMethod) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newOrder = {
    id: orders.length + 1,
    userId,
    cartItems,
    totalAmount,
    paymentMethod,
    status: 'Processing'
  };

  orders.push(newOrder);
  res.status(201).json({ message: "Order created", data: newOrder });
});

module.exports = router;
