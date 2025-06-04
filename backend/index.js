const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB connected')).catch(err => console.log(err));

app.use('/categories', require('./routes/categories'));
app.use('/items', require('./routes/items'));
app.use('/profile', require('./routes/profile'));
app.use('/orders', require('./routes/orders'));
app.use('/cart', require('./routes/cart'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
