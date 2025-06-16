const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const Category = require('../models/Category');

// GET all items with their category details
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().populate('category');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new item and link it to a category
router.post('/', async (req, res) => {
  try {
    const { name, price, stock, category } = req.body;

    const categoryExists = await Category.findById(category);
    if (!categoryExists) return res.status(404).json({ message: 'Category not found' });

    const item = new Item({ name, price, stock, category });
    await item.save();

    await Category.findByIdAndUpdate(category, { $push: { items: item._id } });

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update an item
router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE an item
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
