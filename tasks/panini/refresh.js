import panini from 'panini';

function paniniRefresh(done) {
    panini.refresh();
    done();
}

export default paniniRefresh;
