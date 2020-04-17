const { src, dest } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const eyeglass = require('eyeglass');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const postCss = require('gulp-postcss');
const sass = require('gulp-dart-sass');
const sassGlob = require('gulp-sass-glob');

const production = require('./helpers/mode');
const config = require('./helpers/config');

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

module.exports = css;
