const mentors = require('../controller/mentor.controller');

module.exports = (app) => {
  app.get('/mentor', mentors.findAll);
};
