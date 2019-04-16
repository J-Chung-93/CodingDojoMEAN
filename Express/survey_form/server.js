var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(session({
    secret: "into the spiderverse",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.render("index");
})
app.post("/result", function(request, response){
    console.log("POST DATA \n\n", request.body)
    response.redirect("/result");
})
app.get("/result", function(request, response){
    details = {
        name: request.body.name, 
        location: request.body.location, 
        language: request.body.language, 
        comment: request.body.comment
    }
    response.render("results", details);
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})