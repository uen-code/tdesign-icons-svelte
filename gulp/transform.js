const through = require('through2');

const createTransformStream = function (fn) {
  return through.obj(function (file, encoding, done) {
    if (file.isBuffer()) {
      const before = file.contents.toString(encoding);
      try {
        const after = fn(before, file);
        file.contents = Buffer.from(after);
        done(null, file);
      } catch (err) {
        done(err, null);
      }
    } else {
      done(null, file);
    }
  });
};

module.exports = createTransformStream
