const User = require('../models/User');
const { HttpError } = require('./error');

const bearerToken = (req, res, next) => {
  const authHeader = req.get('Authorization') || '';
  const token = authHeader.replace(/Bearer\s/i, '');
  req.token = token;
  next();
};

const ensureAuth = roles => (req, res, next) => {
  return User.findByToken(req.token)
    .then(user => {
      if(roles.includes(user.role)) {
        req.user = user;
        next();
      } else {
        if(!user){
          return next(new HttpError(400, 'Not a valid token'));
        }
        req.user = user;
        next();
      }
    });
};

module.exports = {
  bearerToken,
  ensureAuth
};
