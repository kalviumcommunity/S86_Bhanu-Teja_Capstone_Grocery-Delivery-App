const express = require('express');
const router = express.Router();

const cart = [
  { id: 1, name: "Banana", quantity: 2, price: 12 },
  { id: 2, name: "Tomato", quantity: 1, price: 30 },
];

router.get('/', (req, res) => {
  res.json(cart);
});

module.exports = router;

