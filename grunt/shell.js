'use strict';

module.exports = function (target) {
    return {
        build: {
            command: [
                'cd src/templates/backend',
                'jekyll build',

                'cd ../frontend',
                'jekyll build',

                'cd ../docs',
                'jekyll build',
            ].join('&&')
        },
        jekyll: {
            command: [
                'cd src/templates/' + target,
                'jekyll build'
            ].join('&&')
        }
    };
};