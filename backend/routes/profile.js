const express = require('express');
const router = express.Router();

let profiles = [];

router.get('/', (req, res) => res.json(profiles));

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

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, phone, address } = req.body;

  const profile = profiles.find(p => p.id === id);
  if (!profile) return res.status(404).json({ message: "Profile not found" });

  profile.name = name || profile.name;
  profile.email = email || profile.email;
  profile.phone = phone || profile.phone;
  profile.address = address || profile.address;

  res.json({ message: "Profile updated", data: profile });
});

module.exports = router;
