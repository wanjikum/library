var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;



//  Encapsulate all the book routes here
var router = function (nav){
    bookRouter.route('/')
        .get(function(req, res){
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db ){
                var collection = db.collection('books');
                var results = collection.find({}).toArray(
                    function(err, results){
                        res.render('booksListView',
                        {
                            title: "book list",
                            nav: nav,
                            books: results
                        });
                    }
                );
            });
        })

    bookRouter.route('/:id')
        .get(function(req, res){
            var url = 'mongodb://localhost:27017/libraryApp';
            
            mongodb.connect(url, function(err, db ){
                var collection = db.collection('books');
                var id = new objectId(req.params.id);
                var results = collection.findOne({_id: id},
                    function( err, results){
                        res.render('bookView',
                        {
                            title: "book list",
                            nav: nav,
                            book: results
                        });
                    }
                );
        })
    })
    return bookRouter;
}

module.exports = router;