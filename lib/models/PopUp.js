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

// create functions for aggregation stages.
// this improves readability and reusability.
const groupByPartySize = () => ({ $group: { _id: '$popUp', rsvpd: { $sum: '$partySize' } } });
const lookupPopUp = () => ({ $lookup: { from: 'popups', localField: '_id', foreignField: '_id', as: 'popUps' } });
const unwindPopup = () => ({ $unwind: '$popUps' });

popUpSchema.statics.findPopular = function() {
  return this.model('Attendee').aggregate([
    groupByPartySize,
    lookupPopUp(),
    unwindPopup(),
    { $project: { rsvpd: true, popupName: '$popUps.name' } },
    { $sort: { rsvpd: -1 } },
    { $limit: 3 }
  ]);
};

popUpSchema.statics.avgAttendees = function() {
  return this.model('Attendee').aggregate([
    groupByPartySize(),
    lookupPopUp(),
    unwindPopup(),
    { $group: { _id: '$popUps.food', avgrsvpd: { $avg: '$rsvpd' } } },
    { $sort: { avgrsvpd: -1 } }

  ]);
};

popUpSchema.statics.foodCategory = function() {
  return this.model('PopUp').aggregate([
    { $group: { _id: '$food', names: { $addToSet: '$name' }, type: { $sum: 1 } } }
  ]);
};

const PopUp = mongoose.model('PopUp', popUpSchema);
module.exports = PopUp;
