'use strict';

module.exports = function () {
    return {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: [{
                expand: true,
                cwd: 'dist/',
                src: ['**/*.html'],
                dest: 'dist/'
            }]
        }
    };
};