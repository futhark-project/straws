const { src, dest } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

const config = require('./helpers/config');
const production = require('./helpers/mode');

/* Configuration */
const {
    ERROR,
    HTML,
    PATH,
} = config;


/* HTML */
function html() {
    return src(PATH.src + HTML.src)
        .pipe(plumber({ errorHandler: notify.onError(ERROR) }))
        .pipe(gulpIf(production, htmlmin({ collapseWhitespace: true })))
        .pipe(dest(PATH.dest + HTML.dest));
}

module.exports = html;
