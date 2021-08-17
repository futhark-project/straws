import { src, dest } from 'gulp';
import zip from 'gulp-zip';
import config from './helpers/config';

const {
  ARCHIVE,
} = config;

// Archive
function archive() {
  return src(ARCHIVE.src)
    .pipe(zip(`${process.env.npm_package_name}.zip`))
    .pipe(dest(ARCHIVE.dest));
}

export default archive;
