/* eslint-disable no-console */
require('dotenv').config();
require('../../lib/utils/connect')();
const User = require('../../lib/models/User');
const mongoose = require('mongoose');
const { Types } = require('mongoose');

describe('User models', () => {

  beforeEach(done => {
    mongoose.connection.dropDatabase(done);
  });
  
  afterAll(done => {
    mongoose.connection.close(done);
  });

  it('validates a good model', () => {
    return User.create({
      email: 'test@test.com',
      // passwordHash: 'abc123',
      role: 'chef'
    })
      .then(user => {
        expect(user.toJSON()).toEqual({
          email: 'test@test.com',
          // passwordHash: expect.any(Object),
          role: 'chef',
          _id: expect.any(Types.ObjectId),
          // __v: 0
        });
      });
  });
});
