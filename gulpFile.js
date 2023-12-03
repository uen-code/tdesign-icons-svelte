const generateIcons = require('./gulp/generate-component');
const copy = require('./gulp/copy-svg');
const gulp = require('gulp');

gulp.task('build', generateIcons);
gulp.task('copy', copy);

gulp.task('default', gulp.series('build'));