'use strict';

module.exports = function (target) {
    return {
        js: {
            files: [
                'gruntfile.js',
                'grunt/*.js',
                'src/javascript/**/*.js',
                '!src/javascript/vendor.js'
            ],
            tasks: ['jshint'],
            options: {
                livereload: true
            }
        },
        less: {
            files: [
                'src/stylesheet/less/**/*.less',
                'src/plugins/**/*.less'
            ],
            tasks: ['less', 'autoprefixer'],
            options: {
                livereload: true
            }
        },
        other: {
            files: [
                'src/templates/**/*.html',
                'src/image/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ],
            tasks: ['shell:jekyll'],
            options: {
                livereload: true
            }
        }
    };
};