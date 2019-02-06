// require('dotenv').config();
// require('../../lib/utils/connect')();
const request = require('supertest');
const app = require('../../lib/app');
const { getToken, getPopUp, getUser } = require('../dataHelpers');
// const { Types } = require('mongoose');

describe('attendee model', () => {
  it('creates an attendee', () => {
    return getPopUp()
      .then(popUp => {
        return getUser()
          .then(user => {
            return request(app)
              .post('/attendees')
              .set('Authorization', `Bearer ${getToken()}`)
              .send({
                user: user._id,
                popUp: popUp._id,
                partySize: 2
              });

          })
          .then(res => {
            console.log('RES', res.body);
            expect(res.body).toEqual({
              __v: 0,
              _id: expect.any(String),
              user: expect.any(String),
              popUp: expect.any(String),
              partySize: 2
            });
          });
      });
  });
});
