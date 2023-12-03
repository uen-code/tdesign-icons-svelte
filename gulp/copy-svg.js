const gulp = require('gulp');

function copySvg(from, to) {
  return gulp.src(from)
    .pipe(gulp.dest(to));
};

const source = 'node_modules/tdesign-icons-svg/src/*.svg'
const path = 'svg'

const copy = (done) => {
  copySvg(source,path);
  done();
};

module.exports = copy;