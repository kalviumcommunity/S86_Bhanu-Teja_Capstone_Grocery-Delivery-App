const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route Imports
const cartRoutes = require('./backend/routes/cart');
const categoryRoutes = require('./backend/routes/categories');
const itemRoutes = require('./backend/routes/items');
const orderRoutes = require('./backend/routes/orders');
const profileRoutes = require('./backend/routes/profile');

// Route Usage
app.use('/cart', cartRoutes);
app.use('/categories', categoryRoutes);
app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);
app.use('/profile', profileRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Grocery Delivery App Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
