const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

//verify jsonwebtoken
const verifyJWT = token => {
  return jwt.verify(token, JWT_SECRET);
};

const decodeToken = (exports.decodeToken = req => {
  if (!req.cookies.token) {
    return false;
  }

  const decodedToken = verifyJWT(req.cookies.token);
  if (!decodedToken) {
    console.error("Invalid token: ", req.cookies.token);
    return false;
  }

  return decodedToken;
});

exports.isUserLoggedIn = req => {
  return !!decodeToken(req);
};

exports.isUser = (req, userId) => {
  let decodedToken = decodeToken(req);
  if (!decodedToken) {
    return false;
  }

  if (decodedToken._id !== userId) {
    console.error(
      `Authentication failed, different ids ${decodedToken._id} vs ${userId}`
    );
    return false;
  }

  return true;
};
