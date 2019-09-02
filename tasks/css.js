const { src, dest } = require('gulp');
const eyeglass = require('eyeglass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

const production = require('./helpers/mode');
const config = require('./helpers/config');

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

module.exports = css;
