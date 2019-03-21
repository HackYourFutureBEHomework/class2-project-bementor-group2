const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./src/model/user.model");

require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connection established");
  })
  .catch(err => {
    console.error(`Database error, exiting. Stack trace:\n${err}`);
    process.exit();
  });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API ready" });
});

// getting list of users from DB
app.get("/user", (req, res) => {
  const users = User.find().then(users => {
    res.send(users);
  });
});

//updating user info to database
app.patch("/user/:_id", (req, res) => {
  User.findByIdAndUpdate({ _id: req.params._id }, req.body)
    .then(() => {
      res.json({ message: "User info was updated" });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
});

//deleting user to database to paste here ID of user to delete
app.delete("/user/:_id", (req, res) => {
  User.remove({ _id: req.params._id })
    .then(() => res.json({ message: "User was deleted" }))
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
});

require("./src/route/user.route")(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
