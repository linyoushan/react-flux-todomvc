var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
	watchify = require('gulp-watchify'),
	streamify = require('gulp-streamify');

gulp.task('browserify',function(){
	gulp.src('./js/index.js')
	.pipe(browserify({
		transform: 'reactify',
	}))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'))
});

gulp.task('watchify', watchify(function(watchify) {
	return gulp.src('js/TodoMain.js')
		.pipe(watchify({
			watch:true
		}))
		.pipe(streamify(uglify()))
		.pipe(gulp.dest('./dist/js'));
}))



gulp.task('default',['browserify']);
gulp.task('watch', ['watchify']);