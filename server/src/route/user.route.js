const users = require("../controller/user.controller");

module.exports = app => {
  app.get("/user", users.findAll);
  app.post("/user", users.create);
  app.get("/user/search", users.search);
  app.patch("/user/:id", users.update);
  app.delete("/user/:id", users.delete);
  app.get("/user/:_id", users.findUser);
  app.put("/user/:id/ranking", users.updateRanking);
};
