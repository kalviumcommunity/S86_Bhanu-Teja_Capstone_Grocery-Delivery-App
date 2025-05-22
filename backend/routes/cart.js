const express = require('express');
const router = express.Router();

let cart = [
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
  const newItem = { id: cart.length + 1, name, quantity, price };
  cart.push(newItem);
  res.status(201).json({ message: "Item added to cart", data: newItem });
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { quantity } = req.body;

  const item = cart.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });

  item.quantity = quantity;
  res.json({ message: "Cart item updated", data: item });
});
module.exports = router;
