const User = require('../lib/models/User');
const PopUp = require('../lib/models/PopUp');
const popUpData = require('./popUpData');
const Chance = require('chance');
const chance = new Chance();
const Attendee = require('../lib/models/Attendee');

const DEFAULT_TOTAL_VISITORS = 50;
const DEFAULT_TOTAL_CHEFS = 10;
const DEFAULT_TOTAL_POPUPS = 20;
const DEFAULT_TOTAL_ATTENDEES = 10;

module.exports = async({
  totalVisitors = DEFAULT_TOTAL_VISITORS,
  totalChefs = DEFAULT_TOTAL_CHEFS,
  totalPopUps = DEFAULT_TOTAL_POPUPS,
  totalAttendees = DEFAULT_TOTAL_ATTENDEES
}) => {
  const visitors = await User.create(
    [...Array(totalVisitors)].map((ele, i) => ({
      email: `${i}visitor@gmail.com`,
      password: 'password',
      role: 'visitor'
    })));

  const chefs = await User.create([...Array(totalChefs)].map((ele, i) => {
    return {
      email: `${i}chef@gmail.com`,
      password: 'password',
      role: 'chef'
    };
  }));

  const popUps = await PopUp.create(popUpData.slice(0, totalPopUps).map(popUp => {
    const chef = chance.pickone(chefs)._id;
    return { ...popUp, chef };
  }));

  await Attendee.create([...Array(totalAttendees)].map(() => {
    const visitor = chance.pickone(visitors)._id;
    const popUp = chance.pickone(popUps)._id;
    return { partySize: chance.integer({ min: 2, max: 10 }), popUp, visitor };
  }));
};
