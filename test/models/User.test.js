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

  it('has a required email', () => {
    const user = new User({});
    const errors = user.validateSync().errors;
    expect(errors.email.message).toEqual('Path `email` is required.');
  });
  
  it('can save password hash', () => {
    return User.create({
      email: 'visitor@gmail.com',
      password: 'password123',
      role: 'visitor'
    })
      .then(user => {
        expect(user.passwordHash).toEqual(expect.any(String));
        expect(user.password).toBeUndefined();
      });
  });
});
