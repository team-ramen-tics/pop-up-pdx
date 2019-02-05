const mongoose = require('mongoose');
const { getAllFoods } = require('./foods');

const popUpSchema = new mongoose.Schema({
  chef: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  food: {
    type: String,
    required: true,
    enum: getAllFoods()
  },
  address: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String
  }
});

const PopUp = mongoose.model('PopUp', popUpSchema);
module.exports = PopUp;
