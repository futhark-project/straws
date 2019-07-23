const { src, dest } = require('gulp');
const { merge } = require('lodash');
const zip = require('gulp-zip');

const {
  ARCHIVE,
} = require('../straws.config.json');

// Archive
function archive(
  userConfig,
  fileName = `${process.env.npm_package_name}.zip`
) {
  const config = merge({}, ARCHIVE, userConfig)
    return src(config.src)
      .pipe(zip(fileName))
      .pipe(dest(config.dest));
}

module.exports = archive;
