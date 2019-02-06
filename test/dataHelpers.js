require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const seedData = require('./seedData');
const User = require('../lib/models/User');
const PopUp = require('../lib/models/PopUp');
const Attendee = require('../lib/models/Attendee');

const request = require('supertest');
const app = require('../lib/app');

beforeAll(() => {
  connect();
});

beforeEach(done => {
  mongoose.connection.dropDatabase(done);
});

beforeEach(()=> {
  return seedData({ totalVisitors: 20, totalChefs: 10, totalPopUps: 10, totalAttendees: 10 });

});

let token;
beforeEach(() => {
  return User.findOne({ email: '0visitor@gmail.com' })
    .then(user => {
      return request(app)
        .post('/auth/signin')
        .send({ email: user.email, password: 'password', role: 'visitor' });
    })
    .then(res => {
      token = res.body.token;
    });
});
beforeEach(() => {
  return User.findOne({ email: '0chef@gmail.com' })
    .then(user => {
      return request(app)
        .post('/auth/signin')
        .send({ email: user.email, password: 'password', role: 'chef' });
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
  ...createGetters(PopUp), 
  ...createGetters(Attendee),
  getToken: () => token 

};
