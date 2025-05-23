const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Importing all routes
const itemsRoute = require('../backend/routes/items');
const categoriesRoute = require('../backend/routes/categories');
const cartRoute = require('../backend/routes/cart');
const ordersRoute = require('../backend/routes/orders');
const profileRoute = require('../backend/routes/profile');

// Using routes
app.use('/items', itemsRoute);
app.use('/categories', categoriesRoute);
app.use('/cart', cartRoute);
app.use('/orders', ordersRoute);
app.use('/profile', profileRoute);

app.get('/', (req, res) => {
  res.send('Grocery Delivery Backend API is running');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
