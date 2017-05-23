var gulp = require('gulp');
var sass = require('gulp-sass');

require('sass')(gulp);
var STYLES = [ 'src/assets/styles/main.scss' ];

gulp.task('sass', function() {
  return gulp.src(STYLES)
	.pipe(sass())
	.pipe(gulp.dest('src/assets/styles/compiled'));
});

module.exports = gulp;