'use strict';

module.exports = function(path) {
    return {
        options: {
            browsers: [
                'Android 2.3',
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 9',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6'
            ]
        },
        src: {
            expand: true,
            src: 'src/stylesheet/**/*.css'
        }
    };
};