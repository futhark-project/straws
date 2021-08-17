import { src } from 'gulp';
import sassdoc from 'sassdoc';
import config from './helpers/config';

/* Configuration */
const {
    CSS,
    DOC,
    PATH,
} = config;

// Doc - Sass Documentation
function doc() {
    return src(PATH.src + CSS.src)
        .pipe(sassdoc(DOC.sassDocOptions));
}

export default doc;
