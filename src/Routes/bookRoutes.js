var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;



//  Encapsulate all the book routes here
var router = function (nav){
    bookRouter.use(function(req, res, next){
        if(!req.user){
            res.redirect('/')
        }
        next();
    });
    bookRouter.route('/')
        .get()

    bookRouter.route('/:id')
        .get()
    return bookRouter;
}

module.exports = router;