var express = require('express');
var bookRouter = express.Router();

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

//  Encapsulate all the book routes here
bookRouter.route('/')
    .get(function(req, res){
        res.render('booksListView',
            {
                title: "book list",
                nav: [
                {
                    link: '/Books', 
                    text:'Single Book'
                },
                {
                    link: '/Authors', 
                    text:'Authors'
                }
            ],
                books: books
            });
        });

bookRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id
        res.render('bookView',
        {
            title: "single book",
            nav: [
            {
                link: '/Books', 
                text:'Books'
            },
            {
                link: '/Authors', 
                text:'Authors'
            }
        ],

            book: books[id]
        });
    })

module.exports = bookRouter;

