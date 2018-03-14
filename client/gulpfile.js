const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

gulp.task('sass', () =>
  (gulp.src('./src/assets/sass/styles.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS({
      relativeTo: './node_modules',
      processImport: true,
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed('./src/assets/css'))
    .pipe(gulp.dest('./src/assets/css'))
  ));

gulp.task('watch_sass', () => {
  gulp.watch('./src/assets/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['watch_sass']);
