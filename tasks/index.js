const archive = require('./archive');
const assets = require('./assets');
const clean = require('./clean');
const css = require('./css');
const doc = require('./doc');
const html = require('./html');
const panini = require('./panini');
const images = require('./images');
const js = require('./js');
const jsVue = require('./js-vue');
const serve = require('./serve');
/* Helpers */
const config = require('./helpers/config');
const mode = require('./helpers/mode');

module.exports = {
    archive,
    assets,
    clean,
    config,
    css,
    doc,
    html,
    images,
    js,
    jsVue,
    mode,
    panini,
    serve,
};
