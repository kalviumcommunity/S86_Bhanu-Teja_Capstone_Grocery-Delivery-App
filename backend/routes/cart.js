const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

router.get("/", async (req, res) => {
  const cart = await Cart.find();
  res.json(cart);
});

router.post("/add", async (req, res) => {
  const newItem = new Cart(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

router.put("/:id", async (req, res) => {
  const updated = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
