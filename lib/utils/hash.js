const bcrypt = require('bcryptjs');

// const SALT_ROUNDS = 10;

const hash = str => {
  return bcrypt.hash(str, 10);
};

const compare = (str, hash) => {
  return bcrypt.compare(str, hash);
};

module.exports = {
  hash,
  compare
};
