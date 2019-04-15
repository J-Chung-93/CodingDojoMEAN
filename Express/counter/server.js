var express = require("express");
var app = express();
var session = require("express-session");

app.use(session({
    secret: "into the spiderverse",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.get('/', function(request, response) {
    if(!request.session.count){
        request.session.count = 1;
    }
    else{
        request.session.count++
    }
    response.render("index.ejs", {counter: request.session.count});
})
app.post('/add2', function(request, response){
    request.session.count++;
    response.redirect('/')
})
app.post('/reset', function(request, response){
    request.session.count = 0;
    response.redirect('/')
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.listen(8000, function() {
    console.log("listening on port 8000");
})