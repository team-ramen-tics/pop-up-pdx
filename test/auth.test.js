require('dotenv').config();
require('../lib/utils/connect')();
// const connect = require('../lib/utils/connect');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../lib/app');
const User = require('../lib/models/User');

describe('Auth', () => {
  // beforeAll(() => {
  //   connect();
  // });

  beforeEach(done => {
    return mongoose.connection.dropDatabase(() => {
      done();
    });
  });
  
  afterAll(done => {
    mongoose.connection.close();
    done();
  });
  
  it('signs up a user', () => {
    return request(app)
      .post('/auth/signup')
      .send({ 
        email: 'vistitor@email.com',
        password: 'password',
        role: 'visitor'

      })
      .then(res => {
        expect(res.body).toEqual({
          user: {
            email: 'vistitor@email.com',
            role: 'visitor',
            _id: expect.any(String)
          },
          token: expect.any(String)
        });
      });
  });

  it.only('signin a user', () => {
    return User.create({ email: 'ron@yahoo.com', password: 'password12', role: 'visitor' })
      .then(() => {
        return request(app)
          .post('/auth/signin')
          .send({
            email: 'ron@yahoo.com',
            password: 'password12',
            role: 'visitor'
          })
          .then(res => {
            expect(res.body).toEqual({
              user: {
                _id: expect.any(String),
                email: 'ron@yahoo.com',
                role: 'visitor'
              },
              token: expect.any(String)
            });      
          });
      });
  });
});
