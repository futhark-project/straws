import { src, dest } from 'gulp';
import config from './helpers/config';

/* Configuration */
const {
    ASSETS,
    PATH,
} = config;

/* ASSETS - json and fonts */
function assets() {
    return src(PATH.src + ASSETS.src)
        .pipe(dest(PATH.dest + ASSETS.dest)); // JSON (.json) and fonts (*.{eot,otf,svg,ttf,woff,woff2})
}

export default assets;
