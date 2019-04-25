var express = require('express')
var session = require('express-session');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("express-flash");
var app = express();
var bcrypt = require('bcrypt');
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
const server = app.listen(8000, function() {
    console.log("listening on port 8000");
})
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.set('trust proxy', 1)
app.use(session({
    secret: 'into the spiderverse',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
mongoose.connect("mongodb://localhost/loginregistration");

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, "Your name is required!"], minlength: 3},
    last_name: {type: String, required: [true, "Comment field can not be left blank!"], minlength: 3},
    email: {type: String, require: [true, "Your email is required!"], minlength: 3},
    password: {type: String, require: [true, "Your password is required!"], minlength: 3},
    }, {timestamps: true})
mongoose.model("User", UserSchema);
var User = mongoose.model("User");


app.get("/", function(req, res) {
    res.render("index");
});
app.post("/register", function(req, res) {
    bcrypt.hash(req.body.password, 10)
    .then(hashed_password => {
        User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hashed_password
        })
        .then(registration => {
            console.log(registration)
            res.redirect("/show");
        })
    });
});
app.get("/show", function(req,res){
    User.find({}, function(err, data){
        res.render("index", {data: data})
    })
})