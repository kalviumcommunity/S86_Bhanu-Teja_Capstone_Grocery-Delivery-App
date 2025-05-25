const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const cartRoutes = require('./routes/cart');
const categoryRoutes = require('./routes/categories');
const itemRoutes = require('./routes/items');
const orderRoutes = require('./routes/orders');
const profileRoutes = require('./routes/profile');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/cart', cartRoutes);
app.use('/categories', categoryRoutes);
app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);
app.use('/profile', profileRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error("MongoDB connection error:", err));
