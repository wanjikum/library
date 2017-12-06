var bookController = function(bookService, nav){

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
                    res.render('bookView',
                    {
                        title: "book list",
                        nav: nav,
                        book: results
                    });
                }
            );
    })
};
    return {
        getIndex: getIndex,
        getById: getById
    }

}

module.exports = bookController;