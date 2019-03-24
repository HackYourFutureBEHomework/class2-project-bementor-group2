const mongoose = require("mongoose");
const User = require("../src/model/user.model");

require("dotenv").config();

const run = async () => {
  mongoose.Promise = global.Promise;
  await mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true
  });

  const names = require("./users.json");

  const models = names.map(rawUser => {
    return new User({
      mentor: rawUser.mentor,
      mentee: rawUser.mentee,
      firstName: rawUser.firstName,
      lastName: rawUser.lastName,
      password: rawUser.password,
      email: rawUser.email,
      tagline: rawUser.tagline,
      location: rawUser.location,
      bio: rawUser.bio,
      interests: rawUser.interests,
      html: rawUser.html,
      css: rawUser.css,
      js: rawUser.js,
      datab: rawUser.datab,
      node: rawUser.node,
      react: rawUser.react,
      cli: rawUser.cli,
      git: rawUser.git,
      eng: rawUser.eng,
      fr: rawUser.fr,
      du: rawUser.du,
      es: rawUser.es,
      ar: rawUser.ar,
      tr: rawUser.tr,
      rus: rawUser.rus,
      script: rawUser.script
    });
  });

  const savePromises = models.map(model => {
    return model.save();
  });

  await Promise.all(savePromises);
  await mongoose.disconnect();
};

run();
