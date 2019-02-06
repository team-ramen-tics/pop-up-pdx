// require('dotenv').config();
// require('../../lib/utils/connect')();
const request = require('supertest');
const app = require('../../lib/app');
const { getToken, getPopUp, getUser, getAttendee } = require('../dataHelpers');
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
  it('deletes an attendee by id', () => {
    return getAttendee()
      .then(attendee => {
        console.log('ATTEND', attendee);
        return Promise.all([
          Promise.resolve(attendee._id),
          request(app)
            .delete(`/attendees/${attendee._id}`)
            .set('Authorization', `Bearer ${getToken()}`)
        ]);
      })
      .then(([_id, res]) => {
        expect(res.body).toEqual({
          __v: 0,
          _id,
          user: expect.any(String),
          popUp: expect.any(String),
          partySize: expect.any(Number)
        });
        return request(app)
          .get(`/attendees/${_id}`);
      })
      .then(res => {
        expect(res.status).toEqual(404);
      });
  });
});
