const generateIcons = require('./gulp/generate-component');
const gulp = require('gulp');

gulp.task('build', generateIcons);

gulp.task('default', gulp.series('build'));
