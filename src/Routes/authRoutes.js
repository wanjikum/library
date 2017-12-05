var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function(nav){
    authRouter.route('/signUp')
        .post(function(req, res){
            console.log('my role is to sign up');
            console.log("This is our req.body", req.body); 
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db ){
                var collection = db.collection('users');
                var user = {
                    username: req.body.username,
                    password: req.body.password 
                }
                collection.insert(user,  
                    function(err, results){
                        req.login(results.ops[0], function(){
                            res.redirect('/auth/profile');
                        })    
                    })
            });
        })
    authRouter.route('/profile')
        .get(function(req, res){
            res.json(req.user)

        })
    return authRouter;
}

module.exports = router;