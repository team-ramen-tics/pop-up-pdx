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
  .delete('/:id', ensureAllRoles(), (req, res, next) => {
    Attendee
      .findByIdAndDelete(req.params.id)
      .then(deletedAttendee => res.send(deletedAttendee))
      .catch(next);
  });

