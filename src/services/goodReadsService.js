 var goodReadService = function(){
     var getBookById = function(id, cb){
         cb(null, {description: 'Our Description'});
     };
     return {
        getBookById: getBookById
    }
 };

 module.exports = goodReadService;