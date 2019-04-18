var express = require("express");
var app = express();
var server = app.listen(1337, function(){
    console.log("listening on port 1337");
});
var io = require("socket.io")(server);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");

io.on("connection", function(socket){
    console.log("Connected")
    socket.on("button_green", function(){
        console.log("Daniel good guy");
        socket.emit("green");
        socket.broadcast.emit("green");
        color = "green";
    });
    socket.on("button_blue", function(){
        socket.emit("blue");
        socket.broadcast.emit("blue");
        color = "blue";
    });
    socket.on("button_pink", function(){
        socket.emit("pink");
        socket.broadcast.emit("pink");
        color = "pink";
    });
});

app.get("/", function(req, res){
    res.render("index");
});
