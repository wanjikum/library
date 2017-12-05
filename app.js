var express = require('express');

// creating an instance of express
var app = express();

// automatically parsers the body of what comes to our request 
// and sets a json object for us 
var bodyParser = require('body-parser');

// The port that express listens on on your machine
var port = process.env.PORT || 5000;

var nav = [
    {
        link: '/Books', 
        text:'Books'
    },{
        link: '/Authors', 
        text:'Authors'
    }
];


// Add book router using the express router
var authRouter = require('./src/Routes/authRoutes')(nav);
var bookRouter = require('./src/Routes/bookRoutes')(nav);
var adminRouter = require('./src/Routes/adminRoutes')(nav);
 

// Set up a middleware for static folders
app.use(express.static('public'));

// if its a json object, it creates a req.body for us use
app.use(bodyParser.json());
// creates a req.body for url encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './src/views');
app.set('view engine',  '.ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/auth', authRouter);


// Open up your browser and to the address bar write "http://localhost:5000/"
app.get('/', function(req, res){
    res.render('index', 
        {title: "Books",
        nav: [{
            link: '/Books', 
            text:'Book'
            },{
            link: '/Authors', 
            text:'Author'
            }],
        // books: books
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