import { src, dest } from 'gulp';
import named from 'vinyl-named';
import gulpIf from 'gulp-if';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import uglify from 'gulp-uglify';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

import production from './helpers/mode';
import config from './helpers/config';
import webpackConfig from './webpack.config';

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

export default js;
