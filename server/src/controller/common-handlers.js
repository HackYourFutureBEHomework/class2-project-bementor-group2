exports.handleServerError = (err, res) => {
  res.status(500).send({
    status: "ERROR",
    message: err.message
  });
};

const handleUserError = (exports.handleUserError = (
  res,
  message,
  httpStatus = 200
) => {
  res.status(httpStatus).send({
    status: "ERROR",
    message: message
  });
});

exports.handleClientOk = (res, message, data = null) => {
  res.send({
    status: "OK",
    message: message,
    ...data
  });
};

exports.handleLoginRequired = (req, res) => {
  handleUserError(res, "Please, login to access", 401);
};

exports.handleInvalidAccess = (req, res) => {
  handleUserError(res, "You don't have permission to access ", 403);
};
