const users = require("../controller/user.controller");

module.exports = app => {
  app.get("/user", users.findAll);
  app.post("/user", users.create);
  // app.patch("/user/:id", users.update);
  // app.delete("/user/:id", users.delete);
};
