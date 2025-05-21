const express = require('express');
const router = express.Router();

const items = [
  { id: 1, name: "Banana", price: 12, categoryId: 1 },
  { id: 2, name: "Tomato", price: 30, categoryId: 2 },
  { id: 3, name: "Milk", price: 25, categoryId: 3 },
];

router.get('/', (req, res) => {
  res.json(items);
});

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
  const newItem = {
    id: items.length + 1,
    name,
    price,
    categoryId
  };
  items.push(newItem);
  res.status(201).json({ message: "Item added", data: newItem });
});

module.exports = router;
