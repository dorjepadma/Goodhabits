const { Router } = require('express');
const GoodHabits = require('../models/GoodHabits');

// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/', (req, res, next) => {
    GoodHabits
      .create(req.body)
      .then(goodHabits => res.send(goodHabits))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    GoodHabits
      .find()
      .then(goodHabits => res.send(goodHabits))
      .catch(next);
  });
  

