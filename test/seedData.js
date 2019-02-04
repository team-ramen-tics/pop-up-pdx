const User = require('../lib/models/User');
// const Chance = require('chance');
// const chance = new Chance();

const DEFAULT_TOTAL_VISITORS = 50;
const DEFAULT_TOTAL_CHEFS = 10;

module.exports = ({
  totalVisitors = DEFAULT_TOTAL_VISITORS,
  totalChefs = DEFAULT_TOTAL_CHEFS
}) => {
  return Promise.all(
    [...Array(totalVisitors)].map((ele, i) => User.create({
      email: `${i}visitor@gmail.com`,
      password: 'password',
      role: 'visitor'
    })))
    .then(() => {
      return Promise.all([...Array(totalChefs)].map((ele, i) => {
        return User.create({
          email: `${i}chef@gmail.com`,
          password: 'password',
          role: 'chef'
        });
      }));
    });
     
};
