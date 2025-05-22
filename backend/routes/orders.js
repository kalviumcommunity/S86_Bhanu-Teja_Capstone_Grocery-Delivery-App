const express = require('express');
const router = express.Router();

let orders = [];

router.get('/', (req, res) => res.json(orders));

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

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  const order = orders.find(o => o.id === id);
  if (!order) return res.status(404).json({ message: "Order not found" });

  order.status = status;
  res.json({ message: "Order status updated", data: order });
});

module.exports = router;
