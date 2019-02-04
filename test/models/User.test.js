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
    const user = new User{
      
    }
    
    })
      .then(user => {
        console.log('user!', user);
        expect(user).toEqual({
          email: 'test@test.com',
          password: 'abc123',
          role: expect.any(String),
          _id: expect.any(Types.ObjectId)
        });
      });
  });
});
