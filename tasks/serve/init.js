import browserSync from 'browser-sync';
import config from '../helpers/config';

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

export default serve;
