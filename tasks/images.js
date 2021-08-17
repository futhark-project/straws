import { src, dest, lastRun } from 'gulp';
import imagemin from 'gulp-imagemin';

import config from './helpers/config';

/* Configuration */
const {
    IMAGES,
    PATH,
} = config;

/* IMAGES */
function images() {
    return src(PATH.src + IMAGES.src, { since: lastRun(images) })
        .pipe(imagemin())
        .pipe(dest(PATH.dest + IMAGES.dest));
}

export default images;
