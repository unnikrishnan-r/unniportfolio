const db = require("../models");
var Sequelize = require("sequelize");

module.exports = {
  findAll: function(req, res) {
    db.Projects.findAll({})
      .then(projectList => res.json(projectList))
      .catch(err => res.status(422).json(err));
  }
};
