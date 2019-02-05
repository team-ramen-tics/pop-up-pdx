const mongoose = require('mongoose');
// const { hash, compare } = require('../../lib/utils/hash');
const { tokenize, untokenize } = require('../../lib/utils/token');
const { getAllRoles } = require('./roles');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  }, 
  passwordHash: String,
  role: {
    type: String,
    required: true,
    enum: getAllRoles()
  }
}, {
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
      delete ret.passwordHash;
    }
  }
});

// userSchema.virtual('password').set(function(password) {
//   this._tempPassword = password;
// });

// userSchema.pre('save', function(next) {
//   hash(this._tempPassword)
//     .then(hashedPassword => {
//       this.passwordHash = hashedPassword;
//       next();
//     });
// });

// userSchema.methods.compare = function(password) {
//   return compare(password, this.passwordHash);
// };

userSchema.statics.findByToken = function(token) {
  return Promise.resolve(untokenize(token));
};

userSchema.methods.authToken = function() {
  return tokenize(this.toJSON());
};


const User = mongoose.model('User', userSchema);
module.exports = User;



