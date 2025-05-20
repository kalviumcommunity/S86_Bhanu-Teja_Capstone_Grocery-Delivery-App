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

module.exports = router;
