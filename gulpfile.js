var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var eslint = require('gulp-eslint');

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
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', function () {
  gulp.watch(['*.html', 'css/*.css', 'scripts/*.js'], ['file']);
});

gulp.task('default', ['linter']);
