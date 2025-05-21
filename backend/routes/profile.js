const express = require('express');
const router = express.Router();

const profiles = [];

router.get('/', (req, res) => {
  res.json(profiles);
});

router.post('/create', (req, res) => {
  const { name, email, phone, address } = req.body;
  if (!name || !email || !phone || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newProfile = {
    id: profiles.length + 1,
    name,
    email,
    phone,
    address
  };

  profiles.push(newProfile);
  res.status(201).json({ message: "Profile created", data: newProfile });
});

module.exports = router;
