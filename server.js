//Dependencies and NPM packages
var express = require("express");
var bodyParser = require("body-parser");

// config node for an Express server
var app = express();

// Sets an initial port for our Listener 8080 for Heroku
var PORT = process.env.PORT || 8080;


//Standard body parser code for Express use urlencoded


app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//Routes to map our files to endpoints

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Listen Function to start our terminal

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

