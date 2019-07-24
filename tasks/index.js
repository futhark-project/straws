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
const config = require('./helpers/config');
const modeArg = require('./helpers/mode-arg');
const modeEnv = require('./helpers/mode-env');

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
    modeArg,
    modeEnv,
    panini,
    serve,
};
