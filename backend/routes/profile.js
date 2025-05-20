const express = require('express');
const router = express.Router();

const profile = {
  name: "Bhanu Teja Reddy",
  email: "bhanuteja9988@gmail.com",
  phone: "9156019527"
};

router.get('/', (req, res) => {
  res.json(profile);
});

module.exports = router;
