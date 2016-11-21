// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./public/javascripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './public/images/**/*',
      imgDst = './public/final/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});