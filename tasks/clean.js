import rm from 'rimraf';
import config from './helpers/config';

/* Configuration */
const {
    PATH,
} = config;

// Clean - Clean destination directory
function clean(done) {
    rm(PATH.dest, done);
}

export default clean;
