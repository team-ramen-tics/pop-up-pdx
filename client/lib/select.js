const inquirer = require('inquirer');
const popUps = require('./popUps');

const select = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: 'What type of food do you like?',
      choices: [{ name: 'View PopUp', value: 'food' }]
    }
  ])
    .then(({ selection }) => {
      if(selection === 'food') {
        return popUps();
      }
    })
    .then(select);
};

module.exports = select;
