const { src, dest } = require('gulp');
const named = require('vinyl-named');
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const production = require('./helpers/mode');
const config = require('./helpers/config');
const webpackConfig = require('./webpack.config');

/* Configuration */
const {
    ERROR,
    JS,
    PATH,
} = config;

function js() {
    return src(PATH.src + JS.entries, { sourcemaps: !production })
        .pipe(named())
        .pipe(plumber({ errorHandler: notify.onError(ERROR) }))
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulpIf(production, uglify()))
        .pipe(dest(PATH.dest + JS.dest, { sourcemaps: '.' }));
}

module.exports = js;
