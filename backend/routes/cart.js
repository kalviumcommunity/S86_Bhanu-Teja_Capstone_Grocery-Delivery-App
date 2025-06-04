const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

router.get('/', async (req, res) => {
  const carts = await Cart.find().populate('user items');
  res.json(carts);
});

router.post('/', async (req, res) => {
  const cart = new Cart(req.body);
  await cart.save();
  res.json(cart);
});

router.put('/:id', async (req, res) => {
  const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(cart);
});

router.delete('/:id', async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: 'Cart deleted' });
});

module.exports = router;
