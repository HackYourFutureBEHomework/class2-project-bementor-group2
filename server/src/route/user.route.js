const users = require("../controller/user.controller");

module.exports = app => {
  app.get("/users", users.findAll);
  app.get("/user/search", users.search);
  app.get("/user/:_id", users.findUser);
  app.get("/user", users.getLoggedUserDetails);
  app.post("/user", users.create);
  app.post("/user/login", users.login);
  app.post("/user/register", users.register);
  app.put("/user/:id/ranking", users.updateRanking);
  app.put("/user/:id/skills", users.updateSkillLevel);
  app.put("/user/:id", users.update);
  app.delete("/user/:_id", users.delete);
  app.delete("/user/cleanup/:qty", users.deleteManyProf);
};
