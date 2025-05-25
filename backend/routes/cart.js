const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

router.get('/', async (req, res) => {
  const carts = await Cart.find();
  res.json(carts);
});

router.post('/', async (req, res) => {
  const cart = new Cart(req.body);
  await cart.save();
  res.status(201).json(cart);
});

router.put('/update/:id', async (req, res) => {
  const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(cart);
});

module.exports = router;
