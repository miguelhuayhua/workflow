const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
