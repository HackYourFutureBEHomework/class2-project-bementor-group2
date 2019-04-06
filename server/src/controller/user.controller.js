const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const handleError = (err, res) => {
  res.status(500).send({
    message: err.message
  });
};

//generate jsonwebtoken
const generateJWT = payload => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "3 days" });
};

// Allow to search for a text case insensitive
const containNoCaseHandler = text => new RegExp(text, "i");

exports.findAll = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => handleError(err, res));
};

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
    .then(user => res.send(user))
    .catch(err => handleError(err, res));
};

exports.search = (req, res) => {
  const query = req.query.text;
  const users = User.find({ $text: { $search: query } })
    .then(users => res.send(users))
    .catch(err => res.status(500).send({ message: err.message }));
};

//Register users
exports.register = (req, res) => {
  //validate if email exists
  //validate if email is valid
  //validate if password is not in plaintext
  //validate if lastname is passed
  //validate if lastname is passed
  const { password } = req.body;
  bcrypt
    .hash(password, 10)
    .then(hash => {
      const user = new User({
        ...req.body,
        password: hash
      });
      return user.save();
    })
    .then(user => {
      //send email and verify
      res.status(201).send({
        message: "Your account has been created successfully"
      });
    });
};

exports.login = (req, res) => {
  let foundUser = null;
  User.findOne({ email: req.body.email })
    .select("+password")
    .then(user => {
      foundUser = user;
      const storedHash = user.password;
      return bcrypt.compare(req.body.password, storedHash);
    })
    .then(authenticationSuccessfull => {
      if (!authenticationSuccessfull)
        return res.status(401).send({
          message: "Incorrect email or password"
        });
      return generateJWT({ _id: foundUser._id });
    })
    .then(token => {
      res.status(500).send({
        token: token,
        message: "Login successful"
      });
    });
};

function calculateRanking(scores) {
  const totalScore = scores.reduce(
    (accumulated, currentArrayValue) => accumulated + currentArrayValue,
    0
  );
  return Math.round(totalScore / scores.length);
}

// User Rankings
exports.updateRanking = (req, res) => {
  console.log("req.params", req.params);
  const newScore = req.body.score;
  User.findById({ _id: req.params.id })
    .then(user => {
      // Prevent errors with previously created users
      if (!user.scores) {
        user.scores = [];
      }
      user.scores.push(newScore);
      user.ranking = calculateRanking(user.scores);

      user
        .save()
        .then(() =>
          res.json({
            message: "User ranking and scores were updated",
            user: {
              ranking: user.ranking,
              scores: user.scores
            }
          })
        )
        .catch(err => handleError(err, res));
    })
    .catch(err => handleError(err, res));
};
