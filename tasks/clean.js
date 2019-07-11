const rm = require('rimraf');

/* Configuration */
const {
    PATH,
} = require('../straws.config.json');

// Clean - Clean destination directory
function clean(done) {
    rm(PATH.dest, done);
}

module.exports = clean;
