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

  it('signin a user', () => {
    return User.create({ email: 'ron@yahoo.com', password: 'password12', role: 'visitor' })
      .then(user => {
        console.log('USER', user);
        return request(app)
          .post('/auth/signin')
          .send({
            email: 'ron@yahoo.com',
            password: 'password12',
            role: 'visitor'
          })
          .then(res => {
            console.log('RES', res.body);
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
  it('has a verify route', () => {
    return User.create({
      email: 'test@test.com',
      password: 'password',
      role: 'visitor'
    })
      .then(() => {
        return request(app)
          .post('/auth/signin')
          .send({ email: 'test@test.com', password: 'password', role: 'visitor' })
          .then(res => res.body.token);
      
      })
      .then(token => {
        return request(app)
          .get('/auth/verify')
          .set('Authorization', `Bearer ${token}`);
      })
      .then(res => {
        expect(res.body).toEqual({ 
         
          _id: expect.any(String),
          email: 'test@test.com',
          role: 'visitor'
          
        });
      });
      
  });
});
