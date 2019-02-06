const { Router } = require('express');
const PopUp = require('../models/PopUp');
const { ensureChef } = require('../middleware/ensureAuth');

const patcher = (body, fields) => {
  return Object.keys(body)
    .reduce((acc, key) => {
      if(fields.includes(key) && body[key]) {
        acc[key] = body[key];
      }
      return acc;
    }, {});
};

module.exports = Router()
  .post('/', ensureChef(), (req, res, next) => {
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
  })

  .get('/:id', (req, res, next) => {
    const _id = req.params.id;
    PopUp
      .findById(_id)
      .then(foundPopUp => {
        res.send(foundPopUp);
      })
      .catch(next);

  })

  .delete('/:id', ensureChef(), (req, res, next) => {
    const _id = req. params.id;
    PopUp
      .findByIdAndDelete(_id)
      .then(() => {
        res.send({ deleted: 1 });
      })
      .catch(next);
  })

  .patch('/:id', ensureChef(), (req, res, next) => {
    const patched = patcher(req.body, 'time');
    PopUp
      .findByIdAndUpdate(req.params.id, patched, { new: true })
      .then(updated => {
        res.send(updated);
      })
      .catch(next);
  });
