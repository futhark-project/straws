const { src, dest } = require('gulp');
const panini = require('panini');
const plugins = require('gulp-load-plugins');

const config = require('../helpers/config');
const production = require('../helpers/mode-arg');

/* Plugins */
// { autoprefixer, cleanCss, htmlmin, if, imagemin, notify, plumber, sass, sassGlob, uglify, zip }
const $ = plugins();

/* Configuration */
const {
    ERROR,
    PANINI,
    PATH,
} = config;


/* HTML */
function html() {
  return src(PATH.src + PANINI.entries)
        .pipe($.plumber({ errorHandler: $.notify.onError(ERROR) }))
    .pipe(panini(PANINI.paniniOptions))
        .pipe($.if(production, $.htmlmin({ collapseWhitespace: true })))
    .pipe(dest(PATH.dest + PANINI.dest));
}

module.exports = html;
