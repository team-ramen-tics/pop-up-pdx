require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const seedData = require('./seedData');
const User = require('../lib/models/User');
const request = require('supertest');
const app = require('../lib/app');

beforeAll(() => {
  connect();
});

beforeEach(done => {
  mongoose.connection.dropDatabase(done);
});

beforeEach(()=> {
  return seedData({ totalVisitors: 20, totalChefs: 10, totalPopUps: 10 });
});

let token;
beforeEach(() => {
  return User.findOne({ email: '0visitor@gmail.com' })
    .then(visitor => {
      return request(app)
        .post('/auth/signin')
        .send({ email: visitor.email, password: 'abc123', role: 'visitor' });
    })
    .then(res => {
      token = res.body.token;
    });
});

afterAll(done => {
  mongoose.connection.close(done);
});

const prepare = model => JSON.parse(JSON.stringify(model));
const prepareAll = models => models.map(prepare);
const createGetters = Model => {
  return {
    [`get${Model.modelName}`]: (query = {}) => Model.findOne(query).then(prepare),
    [`get${Model.modelName}s`]: (query = {}) => Model.find(query).then(prepareAll),
  };
};

module.exports = { 
  ...createGetters(User), 
  getToken: () => token
};
