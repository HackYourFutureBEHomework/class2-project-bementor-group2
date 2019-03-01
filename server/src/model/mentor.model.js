const mongoose = require('mongoose');

const MentorSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Mentor', MentorSchema);
