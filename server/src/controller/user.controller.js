const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");

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

//verify jsonwebtoken
const verifyJWT = token => {
  return jwt.verify(token, JWT_SECRET);
};

// Allow to search for a text case insensitive
const containNoCaseHandler = text => new RegExp(text, "i");

exports.findAll = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => handleError(err, res));
};

exports.update = (req, res) => {
  if (!req.body.token)
    return res.status(401).send({
      message: "You need to be logged in to be able to update your profile"
    });
  const decoded = verifyJWT(req.body.token);
  if (!decoded) return res.status(401).send({ message: "Invalid token" });
  const { id } = req.params;
  if (!decoded._id !== id)
    return res.status(403).send({ message: "authentication failed" });
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
  // const { firstName, lastName, email, password, password2 } = req.body;
  // let errors = [];
  // if ((!firstName || !lastName || !email || !password, !password2)) {
  //   errors.push({ message: "Please enter all fields" });
  // }
  // if (password != password2) {
  //   errors.push({ msg: 'Passwords do not match' });
  // }

  // if (password.length < 6) {
  //   errors.push({ msg: 'Password must be at least 6 characters' });
  // }

  // if (errors.length > 0) {
  //   res.render('register', {
  //     errors,
  //     name,
  //     email,
  //     password,
  //     password2
  //   });
  const { password } = req.body;
  //validate if email exists
  //validate if email is valid
  //validate if password is not in plaintext
  //validate if lastname is passed
  //validate if lastname is passed
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
//       const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         secure: false,
//         port: 587,
//         auth: {
//           user: req.body.email,
//           pass: password.hash
//         },
//         tls: {
//           rejectUnauthorized: false
//         }
//       });

//       const mailtOptions = {
//         from: "BeMentor.be",
//         to: "hassanalihazaraa@gmail.com",
//         subject: "Account activated",
//         text: "Welcome to BEMENTOR"
//       };
//       transporter.sendMail(mailtOptions, (error, info) => {
//         if (error) return console.log(error);
//         console.log("The message was sent");
//         console.log(info);
         res.status(201).send({
           message: "Your account has been created successfully"
      });
        });
        // });
        // res.redirect('/user/login');
    
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

exports.updateSkillLevel = (req, res) => {
  console.log("req.params", req.params);
  const { skillName, level } = req.body;

  User.findById({ _id: req.params.id })
    .then(user => {
      // Prevent errors with previously created users
      if (!user.skills) {
        user.skills = [];
      }

      const skill = user.skills.find(s => s.name == skillName);
      if (skill) {
        skill.level = level;
      } else {
        skills.push({ skillName, level });
      }

      user
        .save()
        .then(() =>
          res.json({
            skills: user.skills
          })
        )
        .catch(err => handleError(err, res));
    })
    .catch(err => handleError(err, res));
};
