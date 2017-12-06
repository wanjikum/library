var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;



//  Encapsulate all the book routes here
var router = function (nav){
    var bookService = require('../services/goodReadsService')();
    console.log('I am here', bookService);
    var bookController = require('../controllers/bookController')(bookService, nav);

    bookRouter.use(bookController.middleware);
    bookRouter.route('/')
        .get(bookController.getIndex)

    bookRouter.route('/:id')
        .get(bookController.getById)
    return bookRouter;
}

module.exports = router;