const archive = require('./archive');
const assets = require('./assets');
const browserReload = require('./browserReload');
const clean = require('./clean');
const css = require('./css');
const doc = require('./doc');
const html = require('./html');
const htmlPanini = require('./html-panini');
const images = require('./images');
const js = require('./js');
const jsVue = require('./js-vue');
const paniniRefresh = require('./paniniRefresh');
const serve = require('./serve');
const config = require('./helpers/config');
const modeArg = require('./helpers/mode-arg');
const modeEnv = require('./helpers/mode-env');

module.exports = {
    archive,
    assets,
    browserReload,
    clean,
    config,
    css,
    doc,
    html,
    htmlPanini,
    images,
    js,
    jsVue,
    modeArg,
    modeEnv,
    paniniRefresh,
    serve,
};
