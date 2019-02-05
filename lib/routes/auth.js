const { Router } = require('express');
const User = require('../models/User');
// const { ensureAuth } = require('../middleware/ensureAuth');
const { HttpError } = require('../middleware/error');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    const { email, password, role } = req.body;
    User
      .create({ email, password, role })
      .then(user => res.send({ user, token: user.authToken() }))
      .catch(next);
  })

  .post('/signin', (req, res, next) => {
    const { email, password, role } = req.body;
    User
      .findOne({ email, role })
      .then(user => {
        console.log('AUTHUSER', user);
        if(!user) {
          return next(new HttpError(401, 'invalid email or password'));
        }
        return Promise.all([
          Promise.resolve(user),
          user.compare(password)
        ]);
      })
      .then(([user, correct]) => {
        if(correct){
          res.send({ user, token: user.authToken() });
        }
      })
      .catch(next);

  });
