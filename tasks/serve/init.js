const browserSync = require('browser-sync');
const config = require('../helpers/config');

/* Configuration */
const {
    PATH,
    SERVER,
} = config;

/* Serve */
const serve = (done) => {
    browserSync.init({
        server: {
            baseDir: PATH.dest,
        },
        port: SERVER.port,
    });
    done();
};

module.exports = serve;
