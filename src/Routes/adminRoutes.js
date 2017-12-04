var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'I love millicent',
        genre: 'self',
        author: 'me',
        read: true
    },
    {
        title: 'I love felistas',
        genre: 'friends',
        author: 'felistas',
        read: false
    },
    {
        title: 'I love larry',
        genre: 'self',
        author: 'larry',
        read: false
    },
    {
        title: 'I love sarah',
        genre: 'family',
        author: 'sarah',
        read: true
    },
    {
        title: 'I love victor',
        genre: 'brother',
        author: 'victor',
        read: true
    }
];

var router = function (nav){
    adminRouter.route('/addBooks')
        .get(function (req, res){
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db ){
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results){
                     res.send(results);
                     db.close(); 
                });
                
            });
            // res.send('Inserting books');
        })
    return adminRouter;

};
module.exports = router;