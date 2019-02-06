const { Router } = require('express');
const PopUp = require('../models/PopUp');
const { ensureAllRoles } = require('../middleware/ensureAuth');

module.exports = Router()
  .post('/', ensureAllRoles(), (req, res, next) => {
    const { name, date, time, food, address, zipcode } = req.body;
    PopUp
      .create({ chef: req.user._id, name, date, time, food, address, zipcode })
      .then(popUp => res.send(popUp))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    PopUp 
      .find()
      .then(popUps => res.send(popUps))
      .catch(next);
  });
