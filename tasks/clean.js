const rm = require('rimraf');
const config = require('./helpers/config');

/* Configuration */
const {
    PATH,
} = config;

// Clean - Clean destination directory
function clean(done) {
    rm(PATH.dest, done);
}

module.exports = clean;
