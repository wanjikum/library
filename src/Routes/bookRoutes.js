var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;



//  Encapsulate all the book routes here
var router = function (nav){
    var bookController = require('../controllers/bookController')(null, nav);

    bookRouter.use(function(req, res, next){
        if(!req.user){
            res.redirect('/')
        }
        next();
    });
    bookRouter.route('/')
        .get(bookController.getIndex)

    bookRouter.route('/:id')
        .get(bookController.getById)
    return bookRouter;
}

module.exports = router;