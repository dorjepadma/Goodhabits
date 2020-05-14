const { Router } = require('express');
const GoodHabits = require('../models/GoodHabits');

// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/', (req, res, next) => {
    GoodHabits
      .create(req.body)
      .then(goodHabit => res.send(goodHabit))
      .catch(next);
  });

