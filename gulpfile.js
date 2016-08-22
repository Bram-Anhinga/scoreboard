// load gulp
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

gulp.task('default', function() {

  return gutil.log('Gulp is running!')

});

gulp.task('imagemin', function(){

  gulp.src('public/images/original/*')
      .pipe(imagemin())
      .pipe(gulp.dest('public/images'))

});

gulp.task('styles', function() {
    gulp.src('public/stylesheets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets/css'));
});

gulp.task('minify-css', ['styles'], function() {

  return gulp.src('public/stylesheets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('watch', function(){

  gulp.watch('public/stylesheets/scss/*.scss', ['minify-css']);
  gulp.watch('public/images/original/*', ['imagemin']);

});
