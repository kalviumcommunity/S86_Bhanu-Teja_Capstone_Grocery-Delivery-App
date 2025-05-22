const express = require('express');
const router = express.Router();

let items = [
  { id: 1, name: "Banana", price: 12, categoryId: 1 },
  { id: 2, name: "Tomato", price: 30, categoryId: 2 },
  { id: 3, name: "Milk", price: 25, categoryId: 3 },
];

router.get('/', (req, res) => res.json(items));

router.get('/:categoryId', (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const filteredItems = items.filter(item => item.categoryId === categoryId);
  res.json(filteredItems);
});

router.post('/add', (req, res) => {
  const { name, price, categoryId } = req.body;
  if (!name || !price || !categoryId) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newItem = { id: items.length + 1, name, price, categoryId };
  items.push(newItem);
  res.status(201).json({ message: "Item added", data: newItem });
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;

  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });

  item.name = name || item.name;
  item.price = price || item.price;
  res.json({ message: "Item updated", data: item });
});

module.exports = router;
