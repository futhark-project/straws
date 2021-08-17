import browserSync from 'browser-sync';

// Browser Reload
function browserReload(done) {
    browserSync.reload();
    done();
}

export default browserReload;
