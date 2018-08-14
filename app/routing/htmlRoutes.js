//Dependencies for NPM packages
var path = require("path");

// Routing
module.exports = function(app) {

  //HTML get request with __dirname path
  

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  //Default for no path
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
