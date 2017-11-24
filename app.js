let express = require('express');

// creating an instance of express
let app = express();

// The port that express listens on on your machine
let port = 5000;

// Open up your browser and to the address bar write "http://localhost:5000/"
app.get('/', function(req, res){
    res.send("Hello there, you are an amazing creature");
});

// app.listen takes in a couple of parameters ie port and a callback function
// which will be executed when app.listen finishes what it is doing
app.listen(port, function(err){
    console.log('Running server on port '+ port);
});