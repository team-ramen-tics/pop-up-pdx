const config = require('../config');
const { setToken } = require('./token');
const inquirer = require('inquirer');
const request = require('superagent');

// console.log('select', require('./select'));

module.exports = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'email',
      message: 'Email'
    },
    {
      type: 'password',
      name: 'password',
      message: 'Password'
    }
  ])
    .then(({ email, password }) => {
      return request
        .post(`${config.url}/auth/signin`)
        .send({ email, password });
    })
    .then(res => {
      setToken(res.body.token);
    });
};
