var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('file', function () {
  gulp.src(['*.html', 'css/*.css', 'scripts/*.js'])
    .pipe(connect.reload());
});

gulp.task('linter', function () {
  return gulp.src('./scripts/scripts.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
  gulp.watch(['*.html', 'css/*.css', 'scripts/*.js'], ['file']);
});

gulp.task('default', ['linter']);
