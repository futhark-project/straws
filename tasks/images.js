const { src, dest, lastRun } = require('gulp');
const imagemin = require('gulp-imagemin');

const config = require('./helpers/config');

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

module.exports = images;
