const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'API ready' });
});

require('./src/route/mentor.route')(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
