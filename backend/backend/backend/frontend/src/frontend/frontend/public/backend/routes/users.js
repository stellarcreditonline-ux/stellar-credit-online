const express = require('express');
const router = express.Router();

// Fake in-memory "database"
let users = [
  { id: 1, name: "Admin", balance: 1000 }
];

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Add new user
router.post('/', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name, balance: 0 };
  users.push(newUser);
  res.json(newUser);
});

// Credit a user
router.post('/:id/credit', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    user.balance += req.body.amount;
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

module.exports = router;￼Enter
