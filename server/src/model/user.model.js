const mongoose = require("mongoose");

const SkillSchema = mongoose.Schema(
  {
    name: String,
    level: Number
  },
  { _id: false }
);

const UserSchema = mongoose.Schema(
  {
    mentor: {
      type: Boolean
    },
    mentee: {
      type: Boolean
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
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
      type: String
    },
    eng: {
      type: Boolean
    },
    fr: {
      type: Boolean
    },
    du: {
      type: Boolean
    },
    es: {
      type: Boolean
    },
    ar: {
      type: Boolean
    },
    tr: {
      type: Boolean
    },
    rus: {
      type: Boolean
    },
    connectedAsMentor: {
      type: [String]
    },
    connectedAsMentee: {
      type: [String]
    },
    ranking: {
      type: Number
    },
    scores: {
      type: [Number]
    },
    skills: [SkillSchema]
  },
  {
    timestamps: true
  }
);

UserSchema.index({
  firstName: "text",
  lastName: "text",
  location: "text",
  tagline: "text",
  location: "text",
  bio: "text",
  interests: "text"
});

module.exports = mongoose.model("User", UserSchema);
