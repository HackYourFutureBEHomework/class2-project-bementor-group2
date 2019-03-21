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
  console.log(req.body);
  const users = new User(req.body);
  users
    .save()
    .then(() => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.search = (req, res) => {
  const query = req.query.text;
  const users = User.find({ $text: { $search: query } })
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};
