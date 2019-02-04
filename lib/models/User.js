const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true 
  }, { 
    toJSON: {
      transform: function(doc, ret) {
        delete ret.__v;
        delete ret.passwordHash;
      }
    }
  },
  role: {
    type: String,
    required: true,
    enum: ['chef, visitor']
  }
  
});

module.exports = mongoose.model('User', userSchema);
