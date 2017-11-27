var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'src/**/*.js'];

// This helps us improve our code quality
gulp.task('style', function(){
    return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
        verbose: true
    })
    .pipe(jscs())
);
});

// Helps us in injecting links to our index.html files
// First what wiredep does is that it does look for bower..json file
// Then it checks for the dependancies
gulp.task('inject', function(){
    var wiredep = require('wiredep').stream; 
    var options = {
        bowerJson : require("./bower.json"),
        directory: "./public/lib",
        ignorePath: "../../public/"
    }
    return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(gulp.dest('./src/views'))
});