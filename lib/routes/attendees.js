const { Router } = require('express');
const Attendee = require('../../lib/models/Attendee');
const { ensureAllRoles } = require('../middleware/ensureAuth');

module.exports = Router()
  .post('/', ensureAllRoles(), (req, res, next) => {
    const { partySize, popUp, user } = req.body;
    Attendee
      .create({ user, popUp, partySize })
      .then(attendee => res.send(attendee))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Attendee
      .find()
      .populate('user')
      .then(attendees => res.send(attendees))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Attendee
      .findById(req.params.id)
      .populate('user', { user: true })
      .then(attendee => res.send(attendee))
      .catch(next);
  })

  .delete('/:id', ensureAllRoles(), (req, res, next) => {
    Attendee
      .findByIdAndDelete(req.params.id)
      .then(() => res.send({ deleted: 1 }))
      .catch(next);
  });
