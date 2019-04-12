const morgan = require("morgan");

exports.errorLogger = morgan("dev", {
  skip: function(req, res) {
    return res.statusCode < 400;
  },
  stream: process.stderr
});

exports.outLogger = morgan("dev", {
  skip: function(req, res) {
    return res.statusCode >= 400;
  },
  stream: process.stdout
});
