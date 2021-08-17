import { src, dest } from 'gulp';
import eyeglass from 'eyeglass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import gulpIf from 'gulp-if';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';

import production from './helpers/mode';
import config from './helpers/config';

/* Configuration */
const {
  COMPATIBILITY,
  CSS,
  ERROR,
  PATH,
} = config;


/* CSS */
function css() {
  return src(PATH.src + CSS.src, { sourcemaps: !production })
    .pipe(
      plumber({
        errorHandler: notify.onError(ERROR),
      }),
    )
    .pipe(sassGlob())
    .pipe(sass(eyeglass()).on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: COMPATIBILITY,
        cascade: false,
      }),
    )
    .pipe(gulpIf(production, cleanCss({ compatibility: 'ie11' })))
    .pipe(dest(PATH.dest + CSS.dest, { sourcemaps: '.' }));
}

export default css;
