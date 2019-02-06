const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
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

const Attendee = mongoose.model('Attendee', attendeeSchema);
module.exports = Attendee;
