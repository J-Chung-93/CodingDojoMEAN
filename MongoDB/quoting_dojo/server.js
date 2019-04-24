var express = require("express");
var app = express();
app.listen(8000, function() {
    console.log("listening on port 8000");
})
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quotesdb");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})