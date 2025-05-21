const express = require('express');
const router = express.Router();

const categories = [
  { id: 1, name: "Fruits" },
  { id: 2, name: "Vegetables" },
  { id: 3, name: "Dairy" },
];

router.get('/', (req, res) => {
  res.json(categories);
});

router.post('/add', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Category name is required" });
  }
  const newCategory = {
    id: categories.length + 1,
    name
  };
  categories.push(newCategory);
  res.status(201).json({ message: "Category added", data: newCategory });
});

module.exports = router;
