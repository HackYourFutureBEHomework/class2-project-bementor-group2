const User = require("../model/user.model");

exports.findAll = (req, res) => {
  const users = User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.create = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};
