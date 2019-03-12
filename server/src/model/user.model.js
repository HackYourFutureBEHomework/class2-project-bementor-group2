const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    secondName: {
      type: String,
      required: true
    },
    tagline: {
      type: String
    },
    location: {
      type: String
    },
    bio: {
      type: String
    },
    interests: {
      type: [String]
    },
    skills: {
      type: [String]
    },
    "e-mail": {
      type: String
    },
    mentorOrMentee: {
      type: [String]
    },
    ranking: {
      type: String
    },
    membershipDate: {
      type: Date
    },
    spokenLanguage: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);
