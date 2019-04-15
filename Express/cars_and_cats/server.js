var express = require("express");
var app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.get("/cars", function (request, response){
    response.render("cars");
})
app.get("/cats", function (request, response){
    response.render("cats");
})
app.get("/dog1", function (request, response){
    var dogArr = [
        {name: "Rex", breed: "Pug", hobby: "sleep"}
    ]
    response.render("dogs", {dogs: dogArr});
})
app.get("/dog2", function (request, response){
    var dogArr = [
        {name: "Buddy", breed: "Golden Retriever", hobby: "smile"}
    ]
    response.render("dogs", {dogs: dogArr});
})
app.get("/cars/new", function (request, response){
    response.render("form");
})
app.listen(8000, function(){
    console.log("listening on port 8000");
})