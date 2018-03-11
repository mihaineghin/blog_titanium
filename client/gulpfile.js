var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

gulp.task('sass', function() {
    return gulp.src('./src/assets/sass/styles.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(minifyCSS({
                relativeTo: './node_modules',
                processImport: true
            }))
            .pipe(rename({suffix: '.min'}))
            .pipe(changed('./src/assets/css'))
            .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('watch_sass', function() {
    gulp.watch('./src/assets/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['watch_sass']);