const mongoose = require("mongoose");

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
      required: true,
      select: false
    },
    email: {
      type: String,
      required: true,
      unique: true
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
    html: {
      type: Boolean
    },
    css: {
      type: Boolean
    },
    js: {
      type: Boolean
    },
    datab: {
      type: Boolean
    },
    node: {
      type: Boolean
    },
    react: {
      type: Boolean
    },
    cli: {
      type: Boolean
    },
    git: {
      type: Boolean
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
    script: {
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
    }
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
