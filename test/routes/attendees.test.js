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


  it('can get a list of attendees', () => {
    return request(app)
      .get('/attendees')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toHaveLength(10);
      });
  });

  it('can get by id', () => {
    return getAttendee()
      .then(attendee => {
        return request(app)
          .get(`/attendees/${attendee._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          user: expect.any(Object),
          popUp: expect.any(String),
          partySize: expect.any(Number),
          _id: expect.any(String),
          __v: 0
        });
      });
  });

  it('deletes an attendee by id', () => {
    return getAttendee()
      .then(attendee => {
        return request(app)
          .delete(`/attendees/${attendee._id}`)
          .set('Authorization', `Bearer ${getToken()}`);
      })
      .then(res => {
        expect(res.body).toEqual({ deleted: 1 });

      });
  });
});
