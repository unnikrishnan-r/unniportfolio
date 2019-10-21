/* eslint-disable no-redeclare */
"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
console.log(env)
var config = require(__dirname + "/../config/config.json")[env];
console.log(config)
var db = {};

if (config.use_env_variable) {
  console.log("Going to try and connect to production  " + process.env.JAWSDB_URL)
  var sequelizeConnection = new Sequelize(process.env[config.use_env_variable]);
  console.log("After connection")
} else {
  var sequelizeConnection = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
console.log("After connection1")

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function (file) {
    var model = sequelizeConnection.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelizeConnection = sequelizeConnection;
db.Sequelize = Sequelize;

module.exports = db;
