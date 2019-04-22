var express = require("express");
var app = express();
var server = app.listen(8000, function(){
    console.log("listening on port 8000");
});
var io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");

var messages = {};
var users = {};
var id = 0;

io.on("connection", function(socket){
    socket.on("new_user", function(data){
        users[socket.id] = {name: data.name};
        socket.emit("all_messages", messages);
    });
    socket.on("new_message", function(data){
        messages[id] = {name: data.name, message: data.message};
        io.emit("new_messages", messages[id]);
        id++;
    });
});

app.get("/", function(req, res){
    res.render("index");
});