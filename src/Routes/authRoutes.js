var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function(nav){
    authRouter.route('/signUp')
        .post(function(req, res){
            console.log('my role is to sign up');
            console.log("This is our req.body", req.body); 
        })
    return authRouter;
}

module.exports = router;