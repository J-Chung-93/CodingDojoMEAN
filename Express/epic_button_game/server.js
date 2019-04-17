    
var express = require("express");
var app = express();
var server = app.listen(1337, function() {
    console.log("listening on port 1337");
});
var io = require("socket.io")(server);
var counter = 0;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");

io.on("connection", function(socket) {
    socket.emit("count", {
        count: `This button has been pushed ${counter} times(s)!`
    });
    socket.broadcast.emit("count", {
        count: `This button has been pushed ${counter} times(s)!`
    });
    socket.on("push", function() {
        counter++;
        socket.emit("count", {
            count: `This button has been pushed ${counter} times(s)!`
        });
        socket.broadcast.emit("count", {
            count: `This button has been pushed ${counter} times(s)!`
        });
    });
    socket.on("reset", function() {
        counter = 0;
        socket.emit("reset_count", {
            count: `This button has been pushed ${counter} times(s)!`
        });
        socket.broadcast.emit("reset_count", {
            count: `This button has been pushed ${counter} times(s)!`
        });
    });
});
app.get("/", function(req, res) {
    res.render("index");
});