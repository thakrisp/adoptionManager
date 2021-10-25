/* eslint-disable no-unused-vars */
const express = require('express');
const userModel = require('../model/model');
const bcrypt = require('bcrypt');

const router = express.Router();

//login into the website
router.post('/login', async (req, res) => {
  var user = await userModel.findOne({ email: req.body.email });
  var match = await bcrypt.compare(req.body.password, user.password);

  if (match) {
    console.log('passwords Match');
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

//registering to the website
router.post('/signup', async (req, res) => {
  var user = new userModel(req.body);

  user.save((err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      console.log(result);
      res.sendStatus(200);
    }
  });
});

router.post('/test', (req, res) => {
  console.log(`test request made: %s`, req.body);
  res.status(200).send(req.body);
});

module.exports = router;
