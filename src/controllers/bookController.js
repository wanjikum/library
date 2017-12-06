var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function(bookService, nav){

    var middleware = function(req, res, next){
        // if(!req.user){
        //     res.redirect('/')
        // }
        next();
    };

    var getIndex = function(req, res){
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
    };

    var getById = function(req, res){
        var url = 'mongodb://localhost:27017/libraryApp';
        
        mongodb.connect(url, function(err, db ){
            var collection = db.collection('books');
            var id = new objectId(req.params.id);
            var results = collection.findOne({_id: id},
                function( err, results){
                    console.log("my book service", bookService)
                    bookService.getBookById(results.id, function(err, book){
                        results.book = book;
                        res.render('bookView',
                        {
                            title: "book list",
                            nav: nav,
                            book: results
                        });
                    })
                }
            );
    })
};
    return {
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    }

}

module.exports = bookController;