require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

console.clear();
var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;
console.log(process.env);

// Starting the server,
app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );

  // syncing our models ------------------------------------/
  // db.sequelizeConnection.sync(syncOptions).then(function() {
  //   console.log("DB connected");
  // });
});

module.exports = app;
