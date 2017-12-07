var http = require('http');
var xml2js = require('xml2js'); 
var parser = xml2js.Parser({explicitArray: false})
 
 
var goodReadService = function(){
    var getBookById = function(id, cb){
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/656?format=xml&key=HKxayibz8Q0Y6mCUbrdDRA'
        };

        var callback = function(response){
            var str = '';
            response.on('data', function(chunk){
                str += chunk;
            });
            response.on('end', function (){
                parser.parseString(str, function(err, result){
                    var nb = "Put a - sign instead of = in the html document if you would love to skip a html doc"
                    result = 'This paragraph contains a lot of lines in the source code, but the browser ignores it'
                    cb(null, result);
                });
            });
        };     
        http.request(options, callback).end();
    };
    return {
        getBookById: getBookById
    }
};

module.exports = goodReadService;