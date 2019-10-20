var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function (app) {
  // Get all Projects
  app.get("/api/projects", function (req, res) {
    console.log("Get All Projects");
    db.Projects.findAll({})
      .then(projectList => {
        res.render("projects", { layout: "main", project: projectList });
      })
      .catch(error => {
        console.error(error);
        res.sendStatus(400);
      });
  })
};
