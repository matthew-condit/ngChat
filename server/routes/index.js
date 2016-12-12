const express = require('express');
const router = express.Router();
const User = require('../../data/models/user');

router.get('/', (req, res) => {
  return res.send('API works');
});

router.get('/users', (req, res) => {
  // User.find({}, (err, users) => {
  //   if (err) {
  //     return res.status(500).json({
  //       message: err.message
  //     });
  //   }
  //   return res.json({
  //     users: users
  //   });
  // });
  return res.send('users kinda works');
});

router.post('/users', (req, res) => {
  console.log(req);
  return res.json(req);
});

module.exports = router;
