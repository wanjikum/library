var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;



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
            var id = req.params.id
            res.render('bookView',
            {
                title: "single book",
                nav: nav,
                book: books[id]
            });
        })
        return bookRouter;
    }

module.exports = router;

