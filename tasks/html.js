const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins');

const config = require('./helpers/config');
const production = require('./helpers/mode-arg');

/* Plugins */
// { autoprefixer, cleanCss, htmlmin, if, imagemin, notify, plumber, sass, sassGlob, uglify, zip }
const $ = plugins();

/* Configuration */
const {
    ERROR,
    HTML,
    PATH,
} = config;


/* HTML */
function html() {
    return src(PATH.src + HTML.entries)
        .pipe($.plumber({ errorHandler: $.notify.onError(ERROR) }))
        .pipe($.if(production, $.htmlmin({ collapseWhitespace: true })))
        .pipe(dest(PATH.dest + HTML.dest));
}

module.exports = html;
