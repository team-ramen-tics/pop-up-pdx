const User = require('../models/User');
// const { HttpError } = require('./error');
const { roles, getAllRoles } = require('../models/roles');

const bearerToken = (req, res, next) => {
  const authHeader = req.get('Authorization') || '';
  const token = authHeader.replace(/Bearer\s/i, '');
  req.token = token;
  next();
};

const ensureAuth = roles => (req, res, next) => {
  console.log('USER', req.token);
  return User.findByToken(req.token)
    .then(user => {
      console.log('User', user);
      if(roles.includes(user.role)) {
        req.user = user;
        next();
      } 
      // else {
      //   return next(new HttpError(400, 'Not a valid token'));
      // if(!user){
      //   return next(new HttpError(400, 'Not a valid token'));
      // }
      // req.user = user;
      // next();
      // }
    });
  // .catch(next);
};

const ensureChef = () => ensureAuth([roles.CHEF]);
const ensureVisitor = () => ensureAuth([roles.VISITOR]);
const ensureAllRoles = () => ensureAuth(getAllRoles());

module.exports = {
  bearerToken,
  ensureAuth,
  ensureChef,
  ensureVisitor,
  ensureAllRoles
};
