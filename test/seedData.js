const User = require('../lib/models/User');
const PopUp = require('../lib/models/PopUp');
const popUpData = require('./popUpData');
const Chance = require('chance');
const chance = new Chance();

const DEFAULT_TOTAL_VISITORS = 50;
const DEFAULT_TOTAL_CHEFS = 10;
const DEFAULT_TOTAL_POPUPS = 20;

module.exports = ({
  totalVisitors = DEFAULT_TOTAL_VISITORS,
  totalChefs = DEFAULT_TOTAL_CHEFS,
  totalPopUps = DEFAULT_TOTAL_POPUPS
}) => {
  return User.create(
    [...Array(totalVisitors)].map((ele, i) => ({
      email: `${i}visitor@gmail.com`,
      password: 'password',
      role: 'visitor'
    })))
    .then(() => {
      return User.create([...Array(totalChefs)].map((ele, i) => {
        return {
          email: `${i}chef@gmail.com`,
          password: 'password',
          role: 'chef'
        };
      }));
    })
    .then(chefs => {
      return PopUp.create(popUpData.slice(0, totalPopUps).map(popUp => {
        const chef = chance.pickone(chefs)._id;
        return { ...popUp, chef };
      }));
    });
};
