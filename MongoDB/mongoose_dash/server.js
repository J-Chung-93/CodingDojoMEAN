var express = require("express");
var app = express();
app.listen(8000, function() {
    console.log("listening on port 8000");
})
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Dojo");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");


var DojoSchema = new mongoose.Schema({
    dojo: { type: String, required: true, minlength: 2 },
    name: { type: String, required: true, minlength: 2 }
});
mongoose.model("Dojo", DojoSchema);
var Dojo = mongoose.model("Dojo");

app.get("/", function(req, res) {
    all = Dojo.find({}, function(err, dojos) {
        res.render("index", { all: dojos });
    });
});
app.post("/add", function(req, res) {
    var student = new Dojo({ dojo: req.body.dojo, name: req.body.name });
    student.save();
    res.redirect("/");
});
app.get("/ninja/new", function(req, res) {
    res.render("new");
});
app.get("/ninja/edit/:id", function(req, res) {
    var ninja = Dojo.find({ id: req.params._id });
    res.render("edit");
});
app.post("/edit/:id", function(req, res) {
    var ninja = Dojo.find({ id: req.params._id });
    ninja.update(
        { id: req.params._id },
        { $set: { dojo: req.body.dojo, name: req.body.name } }
    );
    res.redirect("/");
});
app.get("/ninja/:id", function(req, res) {
    ninja = Dojo.find({ id: req.params._id }, function(err, dojos) {
        res.render("show", { ninja: dojos });
    });
});
app.post("/ninja/destroy/:id", function(req, res) {
    Dojo.find({ id: req.params._id });
    Dojo.remove({ id: req.params._id });
    res.redirect("/");
});