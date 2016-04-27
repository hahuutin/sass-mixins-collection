var gulp = require('gulp');
var connect = require('gulp-connect');
 
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
 
gulp.task('watch', function () {
  gulp.watch(['*.html', 'css/*.css', 'scripts/*.js'], ['file']);
});
 
gulp.task('default', ['connect', 'watch']);