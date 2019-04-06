const users = require("../controller/user.controller");

module.exports = app => {
  app.get("/user", users.findAll);
  app.get("/user/search", users.search);
  app.get("/user/:_id", users.findUser);
  app.post("/user", users.create);
  app.post("/user/register", users.register);
  app.patch("/user/:id", users.update);
  app.put("/user/:id/ranking", users.updateRanking);
  app.delete("/user/:id", users.delete);
};
