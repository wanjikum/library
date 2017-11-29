var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

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
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./public/css/*.css', 
    './public/js/*.js'], {read: false});

    var injectOptions = {
        ignorePath: '/public'
    };  

    var options = {
        bowerJson : require("./bower.json"),
        directory: "./public/lib",
        ignorePath: "../../public/"
    }
    return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./src/views'))
});

// Monitors any change in the files
// Rums the inject and style tasks before our serve task
gulp.task('serve',['inject', 'style'], function(){
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT' : 3000,
        },
        watch: jsFiles
    };
    return nodemon(options)
    .on('restart', function(en){
        console.log('Restarting ...')

    })

})