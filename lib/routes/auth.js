const { Router } = require('express');
const User = require('../models/User');
// const { ensureAuth } = require('../middleware/ensureAuth');
// const { HttpError } = require('../middleware/error');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    const { email, password, role } = req.body;
    User
      .create({ email, password, role })
      .then(user => res.send({ user, token: user.authToken() }))
      .catch(next);

  });