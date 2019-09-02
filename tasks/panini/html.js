const { src, dest } = require('gulp');
const panini = require('panini');
const htmlmin = require('gulp-htmlmin');
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

const config = require('../helpers/config');
const production = require('../helpers/mode');

/* Configuration */
const {
    ERROR,
    PANINI,
    PATH,
} = config;


/* HTML */
function html() {
  return src(PATH.src + PANINI.entries)
    .pipe(plumber({ errorHandler: notify.onError(ERROR) }))
    .pipe(panini(PANINI.paniniOptions))
    .pipe(gulpIf(production, htmlmin({ collapseWhitespace: true })))
    .pipe(dest(PATH.dest + PANINI.dest));
}

module.exports = html;
