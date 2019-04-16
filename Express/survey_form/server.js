var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
const server = app.listen(8000, function() {
    console.log("listening on port 8000");
})
const io = require('socket.io')(server);

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
io.on('connection', function(socket){
    socket.on('form_submit', function(data){
        var number = Math.floor(Math.random()*1000);
        var info = JSON.stringify(data);
        socket.emit("message", {info: `You emitted the following information to the server: ${info}.`});
        socket.emit("random_number", {random: `Your lucky emitted number by the server is: ${number}.`});
    })
})

app.get("/", function(request, response){
    response.render("index");
})
app.post("/result", function(request, response){
    console.log("POST DATA \n\n", request.body)
    response.redirect("/");
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