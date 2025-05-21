const express = require('express');
const router = express.Router();

const cart = [
  { id: 1, name: "Banana", quantity: 2, price: 12 },
  { id: 2, name: "Tomato", quantity: 1, price: 30 },
];

router.get('/', (req, res) => {
  res.json(cart);
});

router.post('/add', (req, res) => {
  const { name, quantity, price } = req.body;
  if (!name || !quantity || !price) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newItem = {
    id: cart.length + 1,
    name,
    quantity,
    price
  };
  cart.push(newItem);
  res.status(201).json({ message: "Item added to cart", data: newItem });
});

module.exports = router;
