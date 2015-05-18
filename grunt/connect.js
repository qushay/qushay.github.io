'use strict';

module.exports = function (target) {
    return {
        options: {
            port: 9000,
            hostname: 'localhost',
            livereload: 35729
        },
        livereload: {
            options: {
                open: {
                    target: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/gh_'+target
                },
                base: ['src']
            }
        }
    };
};