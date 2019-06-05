const { Router } = require('express');
const PopUp = require('../models/PopUp');
const Attendee = require('../models/Attendee');
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
      .populate('chef')
      .then(popUps => res.send(popUps))
      .catch(next);
  })

  // Its would also be nice to get a list of attendees for the popUp
  .get('/:id', (req, res, next) => {
    const _id = req.params.id;
    Promise.all([
      PopUp.findById(_id).populate('chef').lean(),
      // Find attendees by the popUp they are going to
      Attendee.find({ popUp: _id })
    ])

      .then(([foundPopUp, attendees]) => {
        res.send({ ...foundPopUp, attendees, totalAttendees: attendees.length });
      })
      .catch(next);
  })

  .delete('/:id', ensureChef(), (req, res, next) => {
    const _id = req.params.id;
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
      .populate('chef')
      .then(updated => {
        res.send(updated);
      })
      .catch(next);
  })

  .get('/stats/popular', (req, res, next) => {
    PopUp.findPopular()
      .then(popular => res.send(popular))
      .catch(next);
  })
  .get('/stats/avg', (req, res, next) => {
    PopUp.avgAttendees()
      .then(avg => res.send(avg))
      .catch(next);
  })

  .get('/stats/category', (req, res, next) => {
    PopUp.foodCategory()
      .then(category => res.send(category))
      .catch(next);
  });
