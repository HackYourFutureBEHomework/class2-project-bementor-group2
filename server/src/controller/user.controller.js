const User = require("../model/user.model");

const handleError = (err, res) => {
  res.status(500).send({
    message: err.message
  });
};

// Allow to search for a text case insensitive
const containNoCaseHandler = text => new RegExp(text, "i");

exports.findAll = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => handleError(err, res));
};

// exports.find = (req, res) => {
//   User.findById(req.params.id, req.body)
//     .then(user => res.send(user))
//     .catch(err => handleError(err, res));
// };

exports.update = (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => res.json({ message: "User info was updated" }))
    .catch(err => handleError(err, res));
};

exports.delete = (req, res) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then(() => res.json({ message: "User was deleted" }))
    .catch(err => handleError(err, res));
};

exports.findUser = (req, res) => {
  User.findById(req.params._id)
    .then(user => res.send(user))
    .catch(err => handleError(err, res));
};

exports.create = (req, res) => {
  const users = new User(req.body);
  users
    .save()
    .then(() => res.json(user))
    .catch(err => handleError(err, res));
};

/*
exports.search = (req, res) => {
  const searchParams = {};
  if (req.query.firstName) {
    searchParams["firstName"] = containNoCaseHandler(req.query.firstName);
  }
  if (req.query.secondName) {
    searchParams["secondName"] = containNoCaseHandler(req.query.secondName);
  }
  if (req.query.location) {
    searchParams["location"] = containNoCaseHandler(req.query.location);
  }
  // TODO: query arrays
  if (req.query.interests) {
    searchParams["interests"] = containNoCaseHandler(req.query.interests);
  }
  if (req.query.skills) {
    searchParams["skills"] = containNoCaseHandler(req.query.skills);
  }
  if (req.query.email) {
    searchParams["e-mail"] = req.query.email;
  }
  console.debug("User.find:", searchParams);

  User.find(searchParams)
    .then(users => res.send(users))
    .catch(errHandler);
    .then(() => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

*/

exports.search = (req, res) => {
  const query = req.query.text;
  const users = User.find({ $text: { $search: query } })
    .then(users => res.send(users))
    .catch(err => res.status(500).send({ message: err.message }));
};
