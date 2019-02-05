require('dotenv').config();
const connect = require('../lib/utils/connect');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../lib/app');
// const User = require('../lib/models/User');

describe('Auth', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(done => {
    return mongoose.connection.dropDatabase(() => {
      done();
    });
  });
  
  it.only('signs up a user', () => {
    return request(app)
      .post('/auth/signup')
      .send({ 
        email: 'vistitor@email.com',
        password: 'password',
        role: 'visitor'

      })
      .then(res => {
        expect(res.body).toEqual({
          visitor: {
            email: 'vistitor@email.com',
            role: 'visitor',
            _id: expect.any(String)
          },
          token: expect.any(String)
        });
      });
  });
});
