const express = require('express');
const router = express.Router();

const orders = [
  { id: 1, name: "Banana", status: "Delivered" },
  { id: 2, name: "Tomato", status: "Delivered" },
  { id: 3, name: "Carrot", status: "In Process" }
];

router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;

