const { src, dest } = require('gulp');
const zip = require('gulp-zip');
const config = require('./helpers/config');

const {
  ARCHIVE,
} = config;

// Archive
function archive() {
  return src(ARCHIVE.src)
    .pipe(zip(`${process.env.npm_package_name}.zip`))
    .pipe(dest(ARCHIVE.dest));
}

module.exports = archive;
