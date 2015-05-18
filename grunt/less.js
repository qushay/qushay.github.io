'use strict';

module.exports = function() {
    return {
        src: {
            files: [{
                expand: true,
                cwd: 'src/stylesheet/less/',
                src: ['*.less', '!variables.less', '!mixins.less'],
                dest: 'src/stylesheet/',
                ext: '.css'
            }]
        },
        theme: {
            files: {
                // layouts
                'src/stylesheet/themes/layouts/fixed-header.css': 'src/stylesheet/less/themes/layouts/fixed-header.less',
                'src/stylesheet/themes/layouts/reveal-header.css': 'src/stylesheet/less/themes/layouts/reveal-header.less',
                'src/stylesheet/themes/layouts/fixed-sidebar.css': 'src/stylesheet/less/themes/layouts/fixed-sidebar.less',

                // theme
                'src/stylesheet/themes/theme1.css': 'src/stylesheet/less/themes/theme1.less',
                'src/stylesheet/themes/theme2.css': 'src/stylesheet/less/themes/theme2.less',
                'src/stylesheet/themes/theme3.css': 'src/stylesheet/less/themes/theme3.less',
                'src/stylesheet/themes/theme4.css': 'src/stylesheet/less/themes/theme4.less',
            }
        },
        plugins: {
            files: [{
                expand: true,
                cwd: 'src/plugins/',
                src: ['**/css/*.less'],
                dest: 'src/plugins/',
                ext: '.css'
            }]
        }
    };
};