const gulp = require('gulp');
const rename = require('gulp-rename');

const svgToElement = require('./svg-info');
const useTemplate = require('./use-template');

function generateIcons(from, to, extName) {
  return gulp
    .src(from)
    .pipe(svgToElement())
    .pipe(useTemplate())
    .pipe(
      rename(function (file) {
        // 更新文件名
        const parts = file.basename.split('-');
        const newName = parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
        file.basename = newName + 'Icon';
        file.extname = extName;
      }),
    )
    .pipe(gulp.dest(to));
}

const source = 'svg/*.svg';
const path = 'lib';
const extName = '.svelte';

const generator = (done) => {
  generateIcons(source, path, extName);
  done();
};

module.exports = generator;
