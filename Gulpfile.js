var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    less = require('gulp-less');

gulp.task('scripts', function () {

    gulp.src(['app/public/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/'));

});

gulp.task('images', function(){

  gulp.src('app/public/img/*.*')
    .pipe(gulp.dest('./public/img'));

});

gulp.task('css', function(){

  gulp.src('app/public/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));

});

gulp.task('lib', function(){

  gulp.src('app/public/lib/js/*.js')
    .pipe(gulp.dest('./public/js'));

  gulp.src('app/public/lib/css/*.css')
    .pipe(gulp.dest('./public/css'));

  gulp.src('app/public/lib/fonts/*.*')
    .pipe(gulp.dest('./public/fonts'));

});


gulp.task('default', ['scripts', 'images', 'css', 'lib']);


