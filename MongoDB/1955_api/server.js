var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/1955_API");
require("./server/config/schema.js");
require("./server/config/routes.js")(app);
const server = app.listen(8000, function() {
    console.log("listening on port 8000");
})