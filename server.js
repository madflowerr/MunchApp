var express = require("express");

var PORT = process.env.PORT || 2019;

var hbars = require("express-handlebars");

var routes = require("./app/controller/controller");

var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", hbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(routes);


app.listen(PORT, function() {
  console.log("Server listening on Port " + PORT);
});
