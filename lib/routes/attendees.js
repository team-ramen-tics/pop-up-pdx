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
  });

