import { src, dest } from 'gulp';
import htmlmin from 'gulp-htmlmin';
import gulpIf from 'gulp-if';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';

import config from './helpers/config';
import production from './helpers/mode';

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

export default html;
