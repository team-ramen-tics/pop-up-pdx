const app = require('../../lib/app');
const request = require('supertest');
const { getToken } = require('../dataHelpers');


describe.only('routes for popup', () => {
  it('can create a popup', () => {
    return request(app)
      .post('/popups')
      .set('Authorization', `Bearer ${getToken()}`)
      .send({
        name: 'Jun Jun',
        date: '2.28.2019',
        time: '12PM',
        food: 'Asian',
        address: '950 SW Alder St, Portland, OR',
        zipcode: '97205'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          user: expect.any(String),
          __v: 0,
          name: 'Jun Jun',
          date: '2.28.2019',
          time: '12PM',
          food: 'Asian',
          address: '950 SW Alder St, Portland, OR',
          zipcode: '97205'
        });
      });

  });
});
