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
    HTMLPANINI,
    PATH,
} = config;


/* HTML */
function html() {
  return src(PATH.src + HTMLPANINI.entries)
        .pipe($.plumber({ errorHandler: $.notify.onError(ERROR) }))
    .pipe(panini(HTMLPANINI.paniniOptions))
        .pipe($.if(production, $.htmlmin({ collapseWhitespace: true })))
    .pipe(dest(PATH.dest + HTMLPANINI.dest));
}

module.exports = html;
