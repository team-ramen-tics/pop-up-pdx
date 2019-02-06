// require('dotenv').config();
// require('../../lib/utils/connect')();
const request = require('supertest');
const app = require('../../lib/app');
const { getToken, getAttendee } = require('../dataHelpers');
const { Types } = require('mongoose');

describe('attendee model', () => {
  it('creates an attendee', () => {
    return getAttendee()
      .post('/attendees')
      .set('Authorization', `Bearer ${getToken()}`)
      .send({
        user: 'visitor',
        popUp: 'Junjun',
        partySize: 2
      })
      .then(res => {
        console.log(res.body);
        expect(res.body).toEqual({
          _id: expect.any(String),
          user: expect.any(String),
          popUp: expect.any(Types.ObjectId),
          partySize: expect.any(Number),
          __v: 0
        });
      });
  });
})
;
