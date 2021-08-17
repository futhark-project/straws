import { src, dest } from 'gulp';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import eyeglass from 'eyeglass';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import postCss from 'gulp-postcss';
import sass from 'gulp-dart-sass';
import sassGlob from 'gulp-sass-glob';

import production from './helpers/mode';
import config from './helpers/config';

/* Configuration */
const {
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
    .pipe(postCss(production ? [autoprefixer, cssnano({ preset: 'default' })] : [autoprefixer]))
    .pipe(dest(PATH.dest + CSS.dest, { sourcemaps: '.' }));
}

export default css;
