'use strict';

module.exports = function (path) {
    return {
        dist: {
            files: [{
                expand: true,
                cwd: 'dist/javascript/',
                src: '**/*.js',
                dest: 'dist/javascript/'
            },{
                expand: true,
                cwd: 'dist/plugins/',
                src: [
                    '**/*.js',
                    '!jqvmap/js/data/*.js',
                    '!jqvmap/js/maps/*.js',
                    '!jqvmap/js/maps/continents/*.js'
                ],
                dest: 'dist/plugins/'
            }]
        }
    };
};