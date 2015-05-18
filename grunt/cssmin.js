'use strict';

module.exports = function (path) {
    return {
        dist: {
            files: [{
                expand: true,
                cwd: 'dist/stylesheet/',
                src: '**/*.css',
                dest: 'dist/stylesheet/'
            }, {
                expand: true,
                cwd: 'dist/plugins/',
                src: '**/*.css',
                dest: 'dist/plugins/'
            }]
        }
    };
};