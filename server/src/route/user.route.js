const users = require("../controller/user.controller");

module.exports = app => {
  app.get("/user", users.findAll);
  // app.get("/users", users.search);
  app.post("/user", users.create);
  app.get("/user/search", users.search);
  app.get("/user/:id", users.find);
  app.patch("/user/:id", users.update);
  app.delete("/user/:id", users.delete);
  // app.patch("/user/:id", users.update);
  // app.delete("/user/:id", users.delete);
};
