const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const cartRoutes = require("./routes/cart");
const categoryRoutes = require("./routes/categories");
const itemRoutes = require("./routes/items");
const orderRoutes = require("./routes/orders");
const profileRoutes = require("./routes/profile");

app.use("/cart", cartRoutes);
app.use("/categories", categoryRoutes);
app.use("/items", itemRoutes);
app.use("/orders", orderRoutes);
app.use("/profile", profileRoutes);

app.get("/", (req, res) => {
  res.send("Grocery Delivery App API is running");
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
  })
  .catch(err => console.error("Database connection error:", err));
