var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat');

gulp.task('browserify',function(){
	gulp.src('./js/index.js')
	.pipe(browserify({
		transform: 'reactify',
	}))
	.pipe(gulp.dest('./js/bundle.min.js'))
});



gulp.task('default',['browserify']);