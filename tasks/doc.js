const { src } = require('gulp');
const sassdoc = require('sassdoc');
const config = require('./helpers/config');

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

module.exports = doc;
