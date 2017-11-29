var express = require('express');

// creating an instance of express
var app = express();

// The port that express listens on on your machine
var port = process.env.PORT || 5000;

// Set up a middleware for static folders
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine',  'ejs');

// Open up your browser and to the address bar write "http://localhost:5000/"
app.get('/', function(req, res){
    res.render('index', 
        {title: "hello from title",
        nav: [{
            link: '/Books', 
            text:'Books'
            },{
            link: '/Authors', 
            text:'Authors'
            }]
        });
});

app.get('/Books', function(req, res){
    res.send('Hello there, I love reading books');
});

app.get('/Authors', function(req, res){
    res.send('Hello there, I am an author');
});

// app.listen takes in a couple of parameters ie port and a callback function
// which will be executed when app.listen finishes what it is doing
app.listen(port, function(err){
    console.log('Running server on port '+ port);
});