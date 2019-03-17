const User = require("../model/user.model");

const errHandler = err => {
  res.status(500).send({
    message: err.message
  });
};

// Allow to search for a text case insensitive
const regExpHandler = text => new RegExp("^" + text + "$", "i");

exports.findAll = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(errHandler);
};

exports.find = (req, res) => {
  User.findById(req.params.id, req.body)
    .then(user => res.send(user))
    .catch(errHandler);
};

exports.create = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.json(user))
    .catch(errHandler);
};

exports.update = (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => res.json({ message: "User info was updated" }))
    .catch(errHandler);
};

exports.delete = (req, res) => {
  User.findOneAndDelete({ _id: req.params._id })
    .then(() => res.json({ message: "User was deleted" }))
    .catch(errHandler);
};

exports.search = (req, res) => {
  const searchParams = {};
  if (req.query.firstName) {
    searchParams["firstName"] = req.query.firstName;
  }
  if (req.query.secondName) {
    searchParams["secondName"] = req.query.secondName;
  }
  if (req.query.location) {
    searchParams["location"] = req.query.location;
  }
  /* TODO: query arrays */
  if (req.query.interests) {
    searchParams["interests"] = regExpHandler(req.query.interests);
  }
  if (req.query.skills) {
    searchParams["skills"] = regExpHandler(req.query.skills);
  }
  if (req.query.email) {
    searchParams["e-mail"] = req.query.email;
  }
  console.debug("User.find:", searchParams);

  User.find(searchParams)
    .then(users => res.send(users))
    .catch(errHandler);
};
