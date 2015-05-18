'use strict';

module.exports = function (target) {
    return {
        src: ['src/gh_' + target],
        dist: [
            'dist',
            'src/gh_backend',
            'src/gh_frontend',
            'src/gh_docs'
        ]
    };
};