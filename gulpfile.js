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
gulp.task('inject', function(){
    var wiredep = require('wiredep').stream; 
    var options = {
        bowerJson : require("./bower"),
        directory: "./public/src/lib"
    }
    return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(gulp.dest('./src/views'))
});