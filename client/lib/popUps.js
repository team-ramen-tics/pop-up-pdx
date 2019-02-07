const config = require('../config');
const { getToken } = require('./token');
const inquirer = require('inquirer');
const request = require('superagent');
const getPopUp = require('./popUp');

module.exports = () => {
  return request
    .get(`${config.url}/popups`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(popUps => {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'popUp',
          message: 'Which popUp?',
          choices: popUps.map(popUp => popUp._id)
        }
      ]);
    })
    .then(({ popUp }) => {
      return getPopUp(popUp);
    });
};
