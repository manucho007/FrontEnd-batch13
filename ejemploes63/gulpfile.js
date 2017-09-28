var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default',function () {
  gulp.src("js/src/*.js")
      .pipe(concat('build.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js(build)'));
});
