'use strict';

module.exports = function(path) {
    return {
        dist: {
            files: [{
                expand: true,
                cwd: 'dist/image/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'dist/image/'
            }]
        }
    };
};