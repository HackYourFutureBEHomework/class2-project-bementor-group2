const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch(err => {
    console.error(`Database error, exiting. Stack trace:\n${err}`);
    process.exit();
  });

const app = express();

const whitelist = [process.env.CLIENT_URL, "https://bementor.be"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) callback(null, true);
    else callback(new Error("Not allowed by CORS"));
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "API ready" });
});

// const router = express.Router();
// app.use("/api", router);
require("./src/route/user.route")(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
