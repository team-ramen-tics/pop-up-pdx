/* eslint-disable no-console */
require('../dataHelpers');
const { Types } = require('mongoose');
const PopUp = require('../../lib/models/PopUp');

describe('PopUp model', () => {

  it('validates a good popup model', () => {
    const popUp = {
      name: 'Jun Jun',
      date: '2.28.2019',
      time: '12PM',
      food: 'Asian',
      address: '950 SW Alder St, Portland, OR',
      zipcode: '97205'
    };
    const newPopUp = new PopUp(popUp);
    const jsonPopUp = newPopUp.toJSON();
    expect(jsonPopUp).toEqual({
      name: 'Jun Jun',
      date: '2.28.2019',
      time: '12PM',
      food: 'Asian',
      address: '950 SW Alder St, Portland, OR',
      zipcode: '97205',
      _id: expect.any(Types.ObjectId)
    });
  });
});
