const mongoose = require('mongoose');

const attendeesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  popUp: {
    type: mongoose.Types.ObjectId,
    ref: 'PopUp',
    required: true
  },
  partySize: {
    type: Number,
    required: true
  }
});

const Attendees = mongoose.model('Attendees', attendeesSchema);
module.exports = Attendees;
