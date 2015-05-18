'use strict';

module.exports = function () {
    return {
        src: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [
                'gruntfile.js',
                'grunt/*.js',
                'src/javascript/**/*.js',
                '!src/javascript/vendor.js'
            ]
        }
    };
};