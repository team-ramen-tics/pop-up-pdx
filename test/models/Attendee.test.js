require('../dataHelpers');
const { Types } = require('mongoose');
const Attendee = require('../../lib/models/Attendee');

describe('Attendees model', () => {
  it('validates a good attendee model', () => {
    const attendee = {
      user: Types.ObjectId(),
      popUp: Types.ObjectId(),
      partySize: 2
    };
    const newAttendee = new Attendee(attendee);
    const jsonAttendee = newAttendee.toJSON();
    expect(jsonAttendee).toEqual({
      user: expect.any(Types.ObjectId),
      popUp: expect.any(Types.ObjectId),
      partySize: 2,
      _id: expect.any(Object)
    });
  });
});


