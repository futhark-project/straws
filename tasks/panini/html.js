import { src, dest } from 'gulp';
import panini from 'panini';
import htmlmin from 'gulp-htmlmin';
import gulpIf from 'gulp-if';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';

import config from '../helpers/config';
import production from '../helpers/mode';

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

export default html;
