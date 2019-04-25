var express = require("express");
var url = require('url');
var bodyParser = require('body-parser')

var app = express();

var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/dojo_ninjas');

//setup mongodb with mongoose
var ClientSchema = new mongoose.Schema({
    location: {type: String},
    name: {type: String},
    phone_number: {type : String}
}, {timestamps: true})
mongoose.model('Client', ClientSchema);
var Client = mongoose.model('Client');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended : true}));
const server = app.listen(8000, function() {
    console.log("listening on port 8000");
})
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 


app.post('/clients', function(request, response){
    console.log('request: ',request)
    let client = new Client()
    client.location = request.body.location
    client.name = request.body.name
    client.phone_number = request.body.phone_number
    client.save(function (err){
        if(err){
            response.redirect('/')
            console.log('Error submiting client:', err)
        }else{
            console.log('client submission saved')
            response.redirect('/')
        }
    })
    
})
app.post('/clients/:client_id', function(request, response){
    console.log('in post client id')
    console.log('request: ',request.body)
    Client.find({_id: request.params.client_id},function(err, clients){
        if(err){
            console.log('error finding client: ', err)
        }else{
            let client = clients[0]
            client.location = request.body.location
            client.name = request.body.name
            client.phone_number = request.body.phone_number
            client.save(function (err){
                if(err){
                    console.log('Error saving updates to client: ',err)
                }else{
                    console.log('client updated')
                    response.redirect(`/`)
                }
            })
        }
    })    
})

app.get('/clients/destroy/:client_id', function(request, response){
    console.log('in post destroy id')
    console.log('request: ',request)
    Client.findOneAndRemove({_id: request.params.client_id},function(err, client){
        if(err){
            console.log('error finding client: ', err)
        }else{
            console.log('client deleted')
            response.redirect(`/`)
        }
    })    
})

app.get('/', function(request,response){
    console.log('in get /')
    Client.find({},function(err, clients){
        if(err){
            console.log('error loading clients: ', err)
            response.redirect('/')
        }else{
            console.log('clients are: ',clients)
            response.render('dash', {'clients': clients})
        }
    })
})

app.get('/clients/new', function(request,response){
    console.log('in new clients')
            response.render('new')
})

app.get('/clients/edit/:client_id', function(request,response){
    console.log('in edit')
    Client.find({_id: request.params.client_id},function(err, client){
        if(err){
            console.log('error loading client: ', err)
            response.redirect('/')
        }else{
            console.log(client)
            response.render('edit', {'client': client})
        }
    })
})