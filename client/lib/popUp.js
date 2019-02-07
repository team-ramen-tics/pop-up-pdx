const config = require('../config');
const { getToken } = require('./token');
const request = require('superagent');
const img = require('terminal-image');

module.exports = id => {
  return request
    .get(`${config.url}/popUps/${id}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .type('image')
    .then(res => res.body)
    .then(popUp => {
      return Promise.all([
        Promise.resolve(popUp),
        request.get(popUp.photoUrl)
      ]);
    })
    .then(([popUp, res]) => {
      return Promise.all([
        Promise.resolve(popUp),
        img.buffer(res.body)
      ]);
    });
};
