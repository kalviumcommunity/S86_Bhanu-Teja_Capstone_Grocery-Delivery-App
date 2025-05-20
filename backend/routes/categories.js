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

module.exports = router;
