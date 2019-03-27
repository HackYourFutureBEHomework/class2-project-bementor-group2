const users = require("../controller/user.controller");

module.exports = app => {
  app.get("/user", users.findAll);
  app.get("/user/:_id", users.findUser);
  app.post("/user", users.create);
  // app.patch("/user/:id", users.update);
  // app.delete("/user/:id", users.delete);
  app.get("/user/search", users.search);
};
