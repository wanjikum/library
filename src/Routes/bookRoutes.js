var express = require('express');
var bookRouter = express.Router();



//  Encapsulate all the book routes here
var router = function (nav){
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
    bookRouter.route('/')
        .get(function(req, res){
            res.render('booksListView',
                {
                    title: "book list",
                    nav: nav,
                    books: books
                });
            });

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

